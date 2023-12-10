import { AGROVAR_OPS_FORM_KEY } from "@/config/storageKeys";
import {
  AgrovarOpsFormType,
  AgrovarOpsFormTypes,
} from "@/types/agrovar/ComponentTypes";
import {
  AgrovarActionTypes,
  AgrovarOpsFormAction,
  AgrovarOpsFormActionPayload,
} from "@/types/agrovar/ReduxTypes";

const formType =
  (localStorage.getItem(AGROVAR_OPS_FORM_KEY) as AgrovarOpsFormType) ||
  AgrovarOpsFormTypes.LOCATION_RANKING_FORM;

const initialState: AgrovarOpsFormActionPayload = {
  formType: formType,
};

export default function agrovarOpsFormReducer(
  state: AgrovarOpsFormActionPayload = initialState,
  action: AgrovarOpsFormAction
) {
  const { type, payload } = action;

  switch (type) {
    case AgrovarActionTypes.UPDATE_FORM:
      return { ...state, ...payload };

    default:
      return state;
  }
}
