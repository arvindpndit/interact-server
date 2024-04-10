import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import graphqlServer from "./app";

async function initServer() {
  const app = express();

  await graphqlServer.start();
  app.use("/graphql", express.json(), expressMiddleware(graphqlServer));

  app.listen(8000, () => {
    console.log("Server is runnin on port 8000");
  });
}

initServer();
