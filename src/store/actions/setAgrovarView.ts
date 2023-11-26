import { AGROVAR_VIEW_KEY } from "@/config/storageKeys";
import {
  AgrovarActionPayload,
  AgrovarActionTypes,
  AgrovarViewAction,
} from "@/types/AgrovarReduxTypes";
import { AgrovarViewTypes } from "@/types/AgrovarViewTypes";

export default function setAgrovarViewAction(
  payload: AgrovarActionPayload
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
