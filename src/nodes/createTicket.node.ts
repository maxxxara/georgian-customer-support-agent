import { create_llm } from "../utils/config";
import { GraphState } from "../state";

export const createTicketNode = async (
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> => {
  console.log("createTicketNode");
  const llm = create_llm();
  return {};
};
