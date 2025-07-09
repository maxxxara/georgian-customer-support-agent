1. **Set up environment variables**:

```env
# Google AI Configuration
GOOGLE_API_KEY=your_google_ai_api_key_here

# MongoDB Atlas Configuration
MONGODB_ATLAS_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_ATLAS_DB_NAME=your_database_name
```

2. **MongoDB Atlas:**

- Create a MongoDB Atlas account
- Create a new cluster
- Set up database access credentials
- Get the connection string from "Connect" → "Connect your application"
- Create a vector search index named `general_index` with the following configuration. (IMPORTANT STEP)

## 📊 Data Setup

Before running the agent, you need to vectorize the documentation data:

3. **Embed the documents**:

```bash
npm run embed-docs
```

This command runs the `src/scripts/embed_documents.ts` script which:

- Reads the documentation from `docs/data.md`
- Splits it into chunks using both Markdown and Recursive Character text splitters
- Generates embeddings using Google Gemini
- Stores the embeddings in MongoDB Atlas

## 🏃‍♂️ Running the Application

4. **Launch LangGraph Studio** (for visual debugging and development):

```bash
npm run studio
```

This will open LangGraph Studio in your browser where you can:

- Visualize the workflow graph
- Test the agent interactively
- Debug node executions
- Monitor message flow

## 🔄 Workflow

1. **User Input**: User sends a message to the agent
2. **Supervisor Analysis**: Determines if the query needs documentation lookup
3. **Document Retrieval** (if needed): Searches vector database for relevant context
4. **Response Generation**: Creates human-like response in Georgian
5. **Ticket Creation** (if requested): Generates support ticket with unique ID

**Note**: This agent is specifically designed for ZenFlow support in Georgian language. The documentation and responses are tailored for Georgian-speaking users of the ZenFlow platform.
