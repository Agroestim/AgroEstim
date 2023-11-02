import { GRAPHQL_SERVER_URI } from "@/config/apiConfig";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useCookies } from "react-cookie";

export function useApollo() {
  const [cookie] = useCookies(["csrftoken"]);

  const link = new HttpLink({
    uri: GRAPHQL_SERVER_URI,
    credentials: "include",
    headers: {
      cookie: cookie["csrftoken"],
    },
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
}
