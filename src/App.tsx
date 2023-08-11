import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";
import GlobalStyle from "./styles";
import Home from "./components/app/App";

const App = () => {
  const theme = useTheme(GlobalTheme);
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
