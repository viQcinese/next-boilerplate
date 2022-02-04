import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  // uri: "https://graphql-server.com.br",
  cache,
});

export default client;
