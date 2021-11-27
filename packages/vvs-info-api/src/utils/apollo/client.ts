import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: process.env.EXCHANGE_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});
