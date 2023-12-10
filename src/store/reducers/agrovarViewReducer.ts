import { AGROVAR_VIEW_KEY } from "@/config/storageKeys";
import {
  AgrovarViewType,
  AgrovarViewTypes,
} from "@/types/agrovar/ComponentTypes";
import {
  AgrovarActionTypes,
  AgrovarViewAction,
  AgrovarViewActionPayload,
} from "@/types/agrovar/ReduxTypes";

const themeType =
  (localStorage.getItem(AGROVAR_VIEW_KEY) as AgrovarViewType) ||
  AgrovarViewTypes.GRAPH_VIEW;

const initialState: AgrovarViewActionPayload = {
  viewType: themeType,
};

export default function agrovarViewReducer(
  state: AgrovarViewActionPayload = initialState,
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
