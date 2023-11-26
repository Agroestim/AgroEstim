import { combineReducers, legacy_createStore } from "redux";
import agrovarViewReducer from "./reducers/agrovarViewReducer";
import themeReducer from "./reducers/themeReducer";

/**
 * Representa a todos los `reducers` combinados de la aplicacion.
 */
const combinedReducers = combineReducers({
  Theme: themeReducer,
  AgrovarView: agrovarViewReducer,
});

/**
 * `Store` de la aplicacion.
 */
export default legacy_createStore(combinedReducers);
