import { Theme } from "../theme/BaseTheme";

/**
 * Tipos de estado para el proveedor de temas de color.
 */
export enum ThemeTypes {
  dark = "dark",
  light = "light",
}

/**
 * Representa a la union de ambos estados posibles del `ThemeTypes`.
 */
export type ThemeType = ThemeTypes.light | ThemeTypes.dark;

/**
 * Representa al payload dado para el proveedor de temas.
 */
export type ThemePayload = { type: ThemeType };

export enum ThemeActionTypes {
  SET_THEME = "SET_THEME",
}

/**
 * Representa las transacciones entre el proveedor de temas.
 */
export type ThemeAction = {
  type: ThemeActionTypes.SET_THEME;
  payload: ThemePayload;
};

/**
 * Representa la paleta de temas de colores de la aplicacion.
 */
export type GlobalTheme = {
  [ThemeTypes.light]: Theme;
  [ThemeTypes.dark]: Theme;
};
