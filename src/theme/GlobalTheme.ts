import { GlobalTheme, ThemeTypes } from "@/types/ThemeType";

/**
 * Representa el valor por defecto para el proveedor de temas.
 */
export const defaultTheme = ThemeTypes.light;

/**
 * Paleta de colores para el `GlobalTheme`.
 */
export default {
  [ThemeTypes.light]: {
    colorPrimary: "#",
    colorSecondary: "#",
    colorTertiary: "#",

    textColorPrimary: "#302F34",
    textColorSecondary: "#D9D9D9",
    textColorTertiary: "#BBB9B9",

    backgroundColorPrimary: "#EEEEEE",
    backgroundColorSecondary: "#302F34",
    backgroundColorTertiary: "#575757",

    commonPalette: {
      infoColor: "#2DA6E8",
      successColor: "#56AF5C",
      warningColor: "#FFD524",
      dangerColor: "#DA4545",
    },

    bluePalette: {
      lightColor: "#37BBED",
      color: "#2CB9EE",
      darkColor: "#039BE5",
    },

    orangePalette: {
      lightColor: "#F9AB63",
      color: "#F79525",
      darkColor: "#EA7413",
    },

    silverPalette: {
      lightColor: "#8BC1C3",
      color: "#50B7B2",
      darkColor: "#008388",
    },

    redPalette: {
      lightColor: "#FF6464",
      color: "#EF5350",
      darkColor: "#F84C4C",
    },
  },
  [ThemeTypes.dark]: {
    colorPrimary: "#",
    colorSecondary: "#",
    colorTertiary: "#",

    textColorPrimary: "#D9D9D9",
    textColorSecondary: "#302F34",
    textColorTertiary: "#BBB9B9",

    backgroundColorPrimary: "#302F34",
    backgroundColorSecondary: "##EEEEEE",
    backgroundColorTertiary: "#575757",

    commonPalette: {
      infoColor: "#2DA6E8",
      successColor: "#56AF5C",
      warningColor: "#FFD524",
      dangerColor: "#DA4545",
    },

    bluePalette: {
      lightColor: "#37BBED",
      color: "#2CB9EE",
      darkColor: "#039BE5",
    },

    orangePalette: {
      lightColor: "#F9AB63",
      color: "#F79525",
      darkColor: "#EA7413",
    },

    silverPalette: {
      lightColor: "#8BC1C3",
      color: "#50B7B2",
      darkColor: "#008388",
    },

    redPalette: {
      lightColor: "#FF6464",
      color: "#EF5350",
      darkColor: "#F84C4C",
    },
  },
} satisfies GlobalTheme;
