import {
  AgrovarOpsFormActionPayload,
  AgrovarViewActionPayload,
} from "@/types/agrovar/ReduxTypes";
import { ThemePayload } from "@/types/ThemeType";

/**
 * Representa al estado global del `store` de la aplicacion.
 */
interface RootState {
  Theme: ThemePayload;
  AgrovarView: AgrovarViewActionPayload;
  AgrovarForm: AgrovarOpsFormActionPayload;
}

export default RootState;
