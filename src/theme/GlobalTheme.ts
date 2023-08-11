import { ThemeTypes } from "../types/ThemeType";

/**
 * Representa el valor por defecto para el proveedor de temas.
 */
export const defaultTheme = ThemeTypes.light;

/**
 * Paleta de colores para el `GlobalTheme`.
 */
export default {
  [ThemeTypes.light]: {
    textPrimary: "",
    textSecondary: "",
    textTertiary: "",
    textAccent: "",
    textLight: "",
    textDark: "",
    textBlack: "",

    colorPrimary: "",
    colorInfo: "",
    colorSuccess: "",
    colorWarning: "",
    colorDanger: "",

    backgroundPrimary: "",
    backgroundSecondary: "",
    backgroundTertiary: "",
    backgroundAccent: "",
  },
  [ThemeTypes.dark]: {
    textPrimary: "",
    textSecondary: "",
    textTertiary: "",
    textAccent: "",
    textLight: "",
    textDark: "",
    textBlack: "",

    colorPrimary: "",
    colorInfo: "",
    colorSuccess: "",
    colorWarning: "",
    colorDanger: "",

    backgroundPrimary: "",
    backgroundSecondary: "",
    backgroundTertiary: "",
    backgroundAccent: "",
  },
};
