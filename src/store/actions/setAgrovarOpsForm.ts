import { AGROVAR_OPS_FORM_KEY } from "@/config/storageKeys";
import { AgrovarOpsFormTypes } from "@/types/agrovar/ComponentTypes";
import {
  AgrovarActionTypes,
  AgrovarOpsFormAction,
  AgrovarOpsFormActionPayload,
} from "@/types/agrovar/ReduxTypes";

export default function setAgrovarOpsFormAction(
  payload: AgrovarOpsFormActionPayload
): AgrovarOpsFormAction {
  const { formType } = payload || {};

  localStorage.setItem(
    AGROVAR_OPS_FORM_KEY,
    formType || AgrovarOpsFormTypes.LOCATION_RANKING_FORM
  );

  return {
    type: AgrovarActionTypes.UPDATE_FORM,
    payload,
  };
}
