import { StateGraph, START, END } from "@langchain/langgraph";
import { GraphState } from "./state";
import { supervisorNode } from "./nodes/supervisor.node";
import { answerNode } from "./nodes/answer.node";
import { retriveNode } from "./nodes/retrive.node";
import { createTicketNode } from "./nodes/createTicket.node";
import fs from "fs";
import { HumanMessage } from "@langchain/core/messages";

const route_supervisor = async (state: typeof GraphState.State) => {
  const allowedNodes = ["answer_node", "retrive_node"];
  if (allowedNodes.includes(state.next_node)) {
    return state.next_node;
  }
  return "answer_node";
};

export const createGraph = () => {
  const graph = new StateGraph(GraphState)
    .addNode("supervisor_node", supervisorNode)
    .addNode("answer_node", answerNode)
    .addNode("retrive_node", retriveNode);
  // .addNode("createTicket_node", createTicketNode);

  graph.addEdge(START, "supervisor_node");
  graph.addConditionalEdges("supervisor_node", route_supervisor, {
    answer_node: "answer_node",
    retrive_node: "retrive_node",
  });
  graph.addEdge("answer_node", END);
  graph.addEdge("retrive_node", "answer_node");
  // graph.addEdge("createTicket_node", END);
  return graph;
};

const main = async () => {
  const graph = createGraph().compile();
  const result = await graph.invoke({
    messages: [
      // new HumanMessage("სად ჯანდაბიდან მოვიწვიო იუზერი?"),
      new HumanMessage("პრობლემა მაქვს ვორქსფეისის შემნქზე. შექმენი თიქეთი."),
    ],
  });
  console.log(result);
};

main();

// const image = await (await graph.getGraphAsync()).drawMermaidPng();
// const arrayBuffer = await image.arrayBuffer();
// fs.writeFileSync("image.png", Buffer.from(arrayBuffer));
