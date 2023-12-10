import { Theme } from "../theme/BaseTheme";
import { defaultTheme } from "../theme/GlobalTheme";
import { GlobalTheme } from "../types/ThemeType";
import useTypedSelector from "./useTypedSelector";

/**
 * Este hook permite utilizar el `theme` actual dado por el `store` de
 * la aplicacion.
 * @param themes
 * @returns {Theme}
 */
export function useTheme(themes: GlobalTheme): Theme {
  const theme = useTypedSelector(({ Theme: Theme }) => Theme.type);
  return themes[theme || defaultTheme];
}
