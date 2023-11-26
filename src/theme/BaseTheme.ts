/**
 * Representa el tema base de la aplicacion.
 */
export interface Theme {
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;

  textColorPrimary: string;
  textColorSecondary: string;
  textColorTertiary: string;

  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
  backgroundColorTertiary: string;

  commonPalette: {
    infoColor: string;
    successColor: string;
    warningColor: string;
    dangerColor: string;
  };

  bluePalette: {
    lightColor: string;
    color: string;
    darkColor: string;
  };

  orangePalette: {
    lightColor: string;
    color: string;
    darkColor: string;
  };

  silverPalette: {
    lightColor: string;
    color: string;
    darkColor: string;
  };

  redPalette: {
    lightColor: string;
    color: string;
    darkColor: string;
  };
}
