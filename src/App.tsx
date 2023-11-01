import { ApolloProvider } from "@apollo/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Agrovar } from "./components/agrovar/Agrovar";
import Home from "./components/app/App";
import GlobalStyle from "./globaStyles";
import { useApollo } from "./hooks/useApollo";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Home></Home>}
      path="/"
      errorElement={<h1>Page not found ⛔</h1>}
    >
      <Route element={<Agrovar></Agrovar>} path="/agrovar"></Route>
      <Route element={<p>🤔</p>} path="/agroestim"></Route>
    </Route>
  )
);

export default function App() {
  const theme = useTheme(GlobalTheme);
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
