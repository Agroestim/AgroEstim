import { AGROVAR_VIEW_KEY } from "@/config/storageKeys";
import {
  AgrovarActionPayload,
  AgrovarActionTypes,
  AgrovarViewAction,
} from "@/types/AgrovarReduxTypes";
import { AgrovarViewType, AgrovarViewTypes } from "@/types/AgrovarViewTypes";

const themeType =
  (localStorage.getItem(AGROVAR_VIEW_KEY) as AgrovarViewType) ||
  AgrovarViewTypes.GRAPH_VIEW;

const initialState: AgrovarActionPayload = {
  viewType: themeType,
};

export default function agrovarViewReducer(
  state: AgrovarActionPayload = initialState,
  action: AgrovarViewAction
) {
  const { type, payload } = action;

  switch (type) {
    case AgrovarActionTypes.UPDATE_VIEW:
      return { ...state, ...payload };

    default:
      return state;
  }
}
