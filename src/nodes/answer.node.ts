import { GraphState } from "../state";
import { create_llm } from "../utils/config";
import { answerPrompt } from "../prompts/answer.prompt";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { AIMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";
import { DynamicStructuredTool } from "langchain/tools";

const _create_ticket_tool_schema = z.object({
  issue: z
    .string()
    .describe(
      "The issue that the user is facing. Example input: 'I can't connect GitHub to my workspace'"
    ),
});

function ticketNumber(): number {
  // Returns a random integer between 1000 (inclusive) and 10000 (exclusive)
  return Math.floor(Math.random() * (10000 - 1000));
}

const create_ticket_tool = new DynamicStructuredTool({
  name: "create_ticket",
  description:
    "Use this tool to create a ticket for an issue or inform the technical team about a problem",
  func: async ({ issue }: { issue: string }) => {
    return (
      "მადლობა ინფორმაციისთვის. პრობლემა გადავეცი ტექნიკურ გუნდს. პრობლემის აღწერა \n" +
      issue +
      "\n თიქეთის ნომერია: #" +
      ticketNumber() +
      "\n შემიძლია კიდევ რამით დაგეხმარო?"
    );
  },
  schema: _create_ticket_tool_schema,
});

export const answerNode = async (
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> => {
  console.log("answerNode");
  const llm = create_llm().bindTools([create_ticket_tool]);
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", answerPrompt],
    new MessagesPlaceholder("messages"),
  ]);
  const chain = prompt.pipe(llm);
  const result = await chain.invoke({
    messages: state.messages,
    context: state.context,
  });
  if (result.tool_calls && result.tool_calls.length > 0) {
    const tool_call = result.tool_calls[0];
    const tool_name = tool_call.name;
    if (tool_name === "create_ticket") {
      const tool_input = tool_call.args as { issue: string };
      const tool_result = await create_ticket_tool.invoke(tool_input);
      return {
        messages: [new AIMessage(tool_result)],
        new_messages: [new AIMessage(tool_result)],
      };
    }
  }
  console.log("555", result);
  return {
    messages: [new AIMessage(result.content as string)],
    new_messages: [new AIMessage(result.content as string)],
  };
};
