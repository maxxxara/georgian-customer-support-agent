import { OpenAIEmbeddings } from "@langchain/openai";
import {
  GoogleGenerativeAIEmbeddings,
  ChatGoogleGenerativeAI,
} from "@langchain/google-genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { MongoClient } from "mongodb";

const MONGODB_ATLAS_URI = process.env.MONGODB_ATLAS_URI;
const MONGODB_ATLAS_DB_NAME = process.env.MONGODB_ATLAS_DB_NAME;
const MONGODB_ATLAS_COLLECTION_NAME = "general_data";

// export const embeddingModel = new OpenAIEmbeddings({
//   model: "text-embedding-3-large"
// });

export const create_embedding_model = () => {
  return new GoogleGenerativeAIEmbeddings({
    modelName: "gemini-embedding-exp-03-07",
    apiKey: process.env.GOOGLE_API_KEY,
  });
};
export const create_llm = ({
  modelName = "gemini-2.5-flash",
  temperature = 0,
}: {
  modelName?: string;
  temperature?: number;
} = {}) => {
  return new ChatGoogleGenerativeAI({
    model: modelName,
    temperature: temperature,
    apiKey: process.env.GOOGLE_API_KEY,
  });
};

export const create_vector_store = () => {
  const embeddingModel = create_embedding_model();
  const client = new MongoClient(MONGODB_ATLAS_URI || "");
  const collection = client
    .db(MONGODB_ATLAS_DB_NAME)
    .collection(MONGODB_ATLAS_COLLECTION_NAME);

  return new MongoDBAtlasVectorSearch(embeddingModel, {
    collection: collection,
    indexName: "general_index",
    textKey: "data",
    embeddingKey: "embedded_data",
  });
};
