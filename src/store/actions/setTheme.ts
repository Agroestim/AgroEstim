import { THEME_KEY } from "../../config/storageKeys";
import {
  ThemeAction,
  ThemeActionTypes,
  ThemePayload,
  ThemeTypes,
} from "../../types/ThemeType";

export default function setThemeAction(payload: ThemePayload): ThemeAction {
  const { type } = payload || {};

  localStorage.setItem(THEME_KEY, type || ThemeTypes.light);

  return {
    type: ThemeActionTypes.SET_THEME,
    payload,
  };
}
