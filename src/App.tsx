import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./components/app/App";
import GlobalStyle from "./globaStyles";
import { useTheme } from "./hooks/useTheme";
import GlobalTheme from "./theme/GlobalTheme";

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
