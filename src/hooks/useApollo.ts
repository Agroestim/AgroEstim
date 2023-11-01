import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useCookies } from "react-cookie";

export function useApollo() {
  const [cookie] = useCookies(["csrftoken"]);

  const link = new HttpLink({
    uri: "http://127.0.0.1:8080/graphql/",
    // uri: "http://192.168.1.103:8080/graphql/",
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
