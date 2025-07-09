import { create_llm, create_vector_store } from "../utils/config";
import { GraphState } from "../state";
import { z } from "zod";
import { AIMessage, SystemMessage } from "@langchain/core/messages";
import { rag_query_writer_prompt } from "../prompts/retrive.prompt";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

const query_writer_schema = z.object({
  query: z.string().describe("The query to retrieve the information"),
});

export const retriveNode = async (
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> => {
  console.log("retriveNode");
  const vectorStore = create_vector_store();
  const llm = create_llm();
  const modelWithStructuredOutput =
    llm.withStructuredOutput(query_writer_schema);
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", rag_query_writer_prompt],
    new MessagesPlaceholder("messages"),
  ]);
  const chain = prompt.pipe(modelWithStructuredOutput);
  const query = (await chain.invoke({ messages: state.messages })).query;
  const results = await vectorStore.similaritySearchWithScore(query, 2);
  const context =
    "Additional context about question: " +
    results.map((result) => result[0].pageContent).join("\n");

  return {
    context,
  };
};
