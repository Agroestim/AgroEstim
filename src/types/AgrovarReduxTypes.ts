import { AgrovarViewType } from "./AgrovarViewTypes";

export type AgrovarActionPayload = { viewType: AgrovarViewType };

export enum AgrovarActionTypes {
  UPDATE_VIEW = "UPDATE_VIEW",
}

export type AgrovarViewAction = {
  type: AgrovarActionTypes.UPDATE_VIEW;
  payload: AgrovarActionPayload;
};
