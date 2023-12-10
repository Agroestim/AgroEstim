import { AgrovarOpsFormType, AgrovarViewType } from "./ComponentTypes";

export enum AgrovarActionTypes {
  UPDATE_VIEW = "UPDATE_VIEW",
  UPDATE_FORM = "UPDATE_FORM",
}

export interface AgrovarViewActionPayload {
  /**
   * Payload for Agrovar View Type.
   */
  viewType: AgrovarViewType;
}

export interface AgrovarOpsFormActionPayload {
  /**
   * Payload for Agrovar Operation Search Form Type.
   */
  formType: AgrovarOpsFormType;
}

export type AgrovarViewAction = {
  type: AgrovarActionTypes.UPDATE_VIEW;
  payload: AgrovarViewActionPayload;
};

export type AgrovarOpsFormAction = {
  type: AgrovarActionTypes.UPDATE_FORM;
  payload: AgrovarOpsFormActionPayload;
};
