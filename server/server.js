import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import db from "./config/connection.js";
import { typeDefs, resolvers } from "./schemas/index.js";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { JWT_SECRET, COOKIE } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const app = express();
app.use(cookieParser);

const context = ({ req }) => {
  const token = req.cookies.token || "";
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const server = new ApolloServer({ typeDefs, resolvers, context });

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
