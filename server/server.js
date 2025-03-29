import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import db from "./config/connection.js";
import { typeDefs, resolvers } from "./schemas/index.js";

const PORT = 8080;
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

const runApolloSerever = async () => {
  await server.start();
  await db;

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server is listening on ${PORT}`);
    console.log(`Visit Apollo Playground at http://localhost:${PORT}/graphql`);
  });
};

runApolloSerever();
