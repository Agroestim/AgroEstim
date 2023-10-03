import { FC } from "react";
import { Outlet } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client_cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "",
  cache: client_cache,
});

const Dashboard: FC = () => {
  return (
    // TODO: User notification provider
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
};

export default Dashboard;
