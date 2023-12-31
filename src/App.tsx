import { ApolloProvider } from "@apollo/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AgrovarViewComponent } from "./components/agrovar/Agrovar";
import Home from "./components/app/App";
import { Spinner } from "./components/common/spinner/Spinner";
import GlobalStyle from "./globaStyles";
import { useApollo } from "./hooks/useApollo";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Home></Home>}
      path="/"
      errorElement={<h1>An error has ocurred | ⛔</h1>}
    >
      <Route
        element={<AgrovarViewComponent></AgrovarViewComponent>}
        errorElement={<h1>An error has ocurred.</h1>}
        path="/agrovar"
      />
      <Route
        element={<p>Still devlopment</p>}
        errorElement={<h1>An error has ocurred | ⛔</h1>}
        path="/agroestim"
      />
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
        <RouterProvider
          router={router}
          fallbackElement={<Spinner />}
        ></RouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
