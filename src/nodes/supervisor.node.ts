import { create_llm } from "../utils/config";
import { GraphState, NodeToCall } from "../state";
import { BaseMessage, SystemMessage } from "@langchain/core/messages";
import { z } from "zod";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { supervisorPrompt } from "../prompts/supervisor.prompt";

export enum AgentType {
  ANSWER_AGENT = "answer_node",
  RETRIEVE_AGENT = "retrive_node",
  // CREATE_TICKET_AGENT = 'createTicket_node',
}

const supervisorSchema = z.object({
  next_node: z
    .nativeEnum(AgentType)
    .describe("The node name which should be used to answer the question"),
});

export const supervisorNode = async (
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> => {
  const llm = create_llm();
  const modelWithStructuredOutput = llm.withStructuredOutput(supervisorSchema);
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", supervisorPrompt],
    new MessagesPlaceholder("messages"),
  ]);
  const chain = prompt.pipe(modelWithStructuredOutput);
  const result = await chain.invoke({ messages: state.messages });

  return {
    next_node: result.next_node,
  };
};
