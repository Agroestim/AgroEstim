import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Agrovar from "./components/agrovar/Agrovar";
import Home from "./components/app/App";
import Dashboard from "./components/app/Dashboard";
import GlobalStyle from "./globaStyles";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Home></Home>} path="/">
      <Route element={<Dashboard></Dashboard>} path="/graphql"></Route>
      <Route element={<Agrovar></Agrovar>} path="/agrovar"></Route>
      <Route element={<p>🤔</p>} path="/agroestim"></Route>
    </Route>
  )
);

export default function App() {
  const theme = useTheme(GlobalTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}
