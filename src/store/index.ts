import { combineReducers, legacy_createStore } from "redux";
import themeReducer from "./reducers/themeReducer";

/**
 * Representa a todos los `reducers` combinados de la aplicacion.
 */
const combinedStore = combineReducers({
  Theme: themeReducer,
});

/**
 * `Store` de la aplicacion.
 */
export default legacy_createStore(combinedStore);
