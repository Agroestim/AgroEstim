import { AGROVAR_VIEW_KEY } from "@/config/storageKeys";
import { AgrovarViewTypes } from "@/types/agrovar/ComponentTypes";
import {
  AgrovarActionTypes,
  AgrovarViewAction,
  AgrovarViewActionPayload,
} from "@/types/agrovar/ReduxTypes";

export default function setAgrovarViewAction(
  payload: AgrovarViewActionPayload
): AgrovarViewAction {
  const { viewType } = payload || {};

  localStorage.setItem(
    AGROVAR_VIEW_KEY,
    viewType || AgrovarViewTypes.TABLE_VIEW
  );

  return {
    type: AgrovarActionTypes.UPDATE_VIEW,
    payload,
  };
}
