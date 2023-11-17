import { THEME_KEY } from "@/config/storageKeys";
import {
  ThemeAction,
  ThemeActionTypes,
  ThemePayload,
  ThemeType,
  ThemeTypes,
} from "@/types/ThemeType";

const themeType =
  (localStorage.getItem(THEME_KEY) as ThemeType) || ThemeTypes.light;

const initialState: ThemePayload = {
  type: themeType,
};

/**
 * `ThemeReducer`
 */
export default function themeReducer(
  state: ThemePayload = initialState,
  action: ThemeAction
) {
  const { type, payload } = action;

  switch (type) {
    case ThemeActionTypes.SET_THEME:
      return { ...state, ...payload };

    default:
      return state;
  }
}
