import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Agrograph from "./components/agrograf/Agrograph";
import Home from "./components/app/App";
import Dashboard from "./components/app/Dashboard";
import GlobalStyle from "./globaStyles";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";

const App = () => {
  const theme = useTheme(GlobalTheme);
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "agroestim", element: <h1>Agroestim</h1> },
        { path: "agrograph", element: <Agrograph /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
