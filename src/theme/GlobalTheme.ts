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
    colorSecondary: "#f9f9f9",
    colorAccent: "#99cb33",
    colorLight: "#f2f2f2",
    colorDark: "#373a3c",
    colorInfo: "#2cb9ee",
    colorSuccess: "#56af5c",
    colorWarning: "#ffce00",
    colorDanger: "#ef5350",

    backgroundPrimary: "#3f3f3f",
    backgroundSecondary: "#f2f2f2",

    backgroundImageURL:
      "https://campus.inta.gob.ar/pluginfile.php/1/theme_trema/loginbackgroundimage/1687355990/bg_login.jpg",

    togglerIconURL:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e",
  },
  [ThemeTypes.light]: {
    textPrimary: "#3f3f3f",
    textSecondary: "#f2f2f2",

    colorPrimary: "#f9f9f9",
    colorSecondary: "#",
    colorAccent: "#99cb33",
    colorLight: "#f2f2f2",
    colorDark: "#373a3c",
    colorInfo: "#2cb9ee",
    colorSuccess: "#2e7d33",
    colorWarning: "#ffce00",
    colorDanger: "#ef5350",

    backgroundPrimary: "#f2f2f2",
    backgroundSecondary: "#3f3f3f",

    backgroundImageURL:
      "https://campus.inta.gob.ar/pluginfile.php/1/theme_trema/loginbackgroundimage/1687355990/bg_login.jpg",

    togglerIconURL:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e",
  },
} satisfies GlobalTheme;
