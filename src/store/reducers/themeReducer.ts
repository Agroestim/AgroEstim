import { THEME_KEY } from "../../config/storageKeys";
import {
  ThemeAction,
  ThemeActionTypes,
  ThemePayload,
  ThemeType,
  ThemeTypes,
} from "../../types/ThemeType";

const themeType =
  (localStorage.getItem(THEME_KEY) as ThemeType) || ThemeTypes.light;

const stateInitialState: ThemePayload = {
  type: themeType,
};

/**
 * `ThemeReducer`
 */
export default (
  state: ThemePayload = stateInitialState,
  action: ThemeAction
) => {
  const { type, payload } = action;

  switch (type) {
    case ThemeActionTypes.SET_THEME:
      return { ...state, ...payload };

    default:
      return state;
  }
};
