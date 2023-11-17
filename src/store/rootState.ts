import { ThemePayload } from "@/types/ThemeType";

/**
 * Representa al estado global del `store` de la aplicacion.
 */
interface RootState {
  Theme: ThemePayload;
}

export default RootState;
