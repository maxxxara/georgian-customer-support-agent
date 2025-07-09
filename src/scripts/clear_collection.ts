import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_ATLAS_URI = process.env.MONGODB_ATLAS_URI;
const MONGODB_ATLAS_DB_NAME = process.env.MONGODB_ATLAS_DB_NAME;
const MONGODB_ATLAS_COLLECTION_NAME = "general_data";

const clear_collection = async () => {
  const client = new MongoClient(MONGODB_ATLAS_URI || "");
  const collection = client
    .db(MONGODB_ATLAS_DB_NAME)
    .collection(MONGODB_ATLAS_COLLECTION_NAME);
  await collection.deleteMany({});
  console.log("Collection cleared");
};

clear_collection();
