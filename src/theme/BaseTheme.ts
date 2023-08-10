/**
 * Representa el tema base de la aplicacion.
 */
export interface Theme {
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textAccent: string;
  textLight: string;
  textDark: string;
  textBlack: string;

  colorInfo: string;
  colorSuccess: string;
  colorWarning: string;
  colorDanger: string;

  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundAccent: string;
}
