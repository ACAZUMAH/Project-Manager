import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";
import { ContextFunction } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { contextType } from "../services/types";
import { json } from "express";
import formatError from "./formatError";

const context: ContextFunction<[ExpressContextFunctionArgument], contextType> = ({ req }): Promise<contextType> => {
  const token = req.headers.token;
  const user = req.user;

  return Promise.resolve({ token, user });
};


const createGraghqlServer = async ({ app, schema, httpServer }) => {
  const server = new ApolloServer<contextType>({
    schema,
    formatError,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, { context })
  );

  return server;
};

export default createGraghqlServer;
