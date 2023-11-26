import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { SVGSpinner } from "./components/common/spinner/styled";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<SVGSpinner></SVGSpinner>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>
);
