import { AgrovarViewTypes } from "./AgrovarViewTypes";

/**
 * Defines the action to dispatch using the `event.currentTarget.value`.
 */
export enum AgrovarToggleViewActions {
  TOGGLE_CHART_VIEW = "TOGGLE_CHART_VIEW",
  TOGGLE_GRAPH_VIEW = "TOGGLE_GRAPH_VIEW",
}

export type AgrovarToggleViewAction =
  | AgrovarToggleViewActions.TOGGLE_CHART_VIEW
  | AgrovarToggleViewActions.TOGGLE_GRAPH_VIEW;

export type AgrovarToggleViewActionType = {
  type: AgrovarToggleViewAction;
};

export type AgrovarToggleViewState = {
  [AgrovarViewTypes.TABLE_VIEW]: boolean;
  [AgrovarViewTypes.GRAPH_VIEW]: boolean;
};
