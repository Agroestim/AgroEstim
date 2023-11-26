import "styled-components";
import type { Theme } from "./theme/BaseTheme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
