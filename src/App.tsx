import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import store from "./store";
import GlobalTheme from "./theme/GlobalTheme";

const App = () => {
  const theme = useTheme(GlobalTheme);
  const router = createBrowserRouter([{ path: "/", element: <h1>Hola</h1> }]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
