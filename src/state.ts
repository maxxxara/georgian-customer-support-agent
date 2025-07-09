import { AIMessage, BaseMessage } from "@langchain/core/messages";
import { Annotation, messagesStateReducer } from "@langchain/langgraph";

export type NodeToCall = "answer_node" | "retrive_node" | "createTicket_node";

export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [
      new AIMessage({
        content: "გამარჯობა. Zenflow საპორტი გისმენთ.",
      }),
    ],
  }),
  new_messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),

  next_node: Annotation<NodeToCall>,

  context: Annotation<string>,
});
