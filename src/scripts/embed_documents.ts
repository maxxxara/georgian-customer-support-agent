import { create_vector_store } from "../utils/config";
import type { Document } from "@langchain/core/documents";
import {
  RecursiveCharacterTextSplitter,
  MarkdownTextSplitter,
} from "@langchain/textsplitters";
import fs from "fs";

const FILE_PATHS = ["./docs/data.md"];

const read_and_chunk_document = async () => {
  const chunks: string[] = [];
  for (const FILE_PATH of FILE_PATHS) {
    const document = fs.readFileSync(FILE_PATH, "utf8");
    const markdownSplitter = new MarkdownTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const hierarchicalSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 800,
      chunkOverlap: 150,
      separators: ["\n\n## ", "\n\n### ", "\n\n", "\n", " ", ""],
    });
    const markdownChunks = await markdownSplitter.splitText(document); // 9
    const hierarchicalChunks = await hierarchicalSplitter.splitText(document); // 12
    chunks.push(...hierarchicalChunks);
  }
  return chunks;
};

const main = async () => {
  const vectorStore = create_vector_store();

  const chunks = await read_and_chunk_document();
  const documents: Document[] = chunks.map((chunk) => ({
    pageContent: chunk,
    metadata: {
      source: "general_data",
    },
  }));
  const ids = documents.map((_, index) => index.toString());
  try {
    await vectorStore.addDocuments(documents, { ids });
    console.log("Documents added successfully");
    process.exit(0);
  } catch (error) {
    console.error("Eeerror", error);
    process.exit(1);
  }
};

main();
