import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";
import typeDefs from "./type-defs";

const client = new ApolloClient({
  // uri: "https://graphql-server.com.br",
  cache,
  typeDefs,
});

export default client;
