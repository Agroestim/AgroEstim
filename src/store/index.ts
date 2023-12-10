import { combineReducers, legacy_createStore } from "redux";
import agrovarOpsFormReducer from "./reducers/agrovarOpsFormReducer";
import agrovarViewReducer from "./reducers/agrovarViewReducer";
import themeReducer from "./reducers/themeReducer";

/**
 * Representa a todos los `reducers` combinados de la aplicacion.
 */
const combinedReducers = combineReducers({
  Theme: themeReducer,
  AgrovarView: agrovarViewReducer,
  AgrovarForm: agrovarOpsFormReducer,
});

/**
 * `Store` de la aplicacion.
 */
export default legacy_createStore(combinedReducers);
