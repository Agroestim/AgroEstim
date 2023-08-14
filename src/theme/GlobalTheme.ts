import { GlobalTheme, ThemeTypes } from "../types/ThemeType";

/**
 * Representa el valor por defecto para el proveedor de temas.
 */
export const defaultTheme = ThemeTypes.light;

/**
 * Paleta de colores para el `GlobalTheme`.
 */
export default {
  [ThemeTypes.dark]: {
    textPrimary: "#f2f2f2",
    textSecondary: "#3f3f3f",

    colorPrimary: "#",
    colorSecondary: "#",
    colorAccent: "#99cb33",
    colorLight: "#f2f2f2",
    colorDark: "#373a3c",
    colorInfo: "#2cb9ee",
    colorSuccess: "#2e7d33",
    colorWarning: "#ffce00",
    colorDanger: "#ef5350",

    backgroundPrimary: "",
    backgroundSecondary: "",

    backgroundImageURL:
      "https://campus.inta.gob.ar/pluginfile.php/1/theme_trema/loginbackgroundimage/1687355990/bg_login.jpg",
  },
  [ThemeTypes.light]: {
    textPrimary: "#3f3f3f",
    textSecondary: "#f2f2f2",

    colorPrimary: "#",
    colorSecondary: "#",
    colorAccent: "#99cb33",
    colorLight: "#f2f2f2",
    colorDark: "#373a3c",
    colorInfo: "#2cb9ee",
    colorSuccess: "#2e7d33",
    colorWarning: "#ffce00",
    colorDanger: "#ef5350",

    backgroundPrimary: "",
    backgroundSecondary: "",

    backgroundImageURL:
      "https://campus.inta.gob.ar/pluginfile.php/1/theme_trema/loginbackgroundimage/1687355990/bg_login.jpg",
  },
} as GlobalTheme;
