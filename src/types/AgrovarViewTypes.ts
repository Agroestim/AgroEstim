/**
 * Defines the view types supported by Agrovar App
 * View types make reference to "Chart View" or "Table view", etc.
 */
export enum AgrovarViewTypes {
  TABLE_VIEW = "CHART_VIEW",
  GRAPH_VIEW = "GRAPH_VIEW",
}

export type AgrovarViewType =
  | AgrovarViewTypes.TABLE_VIEW
  | AgrovarViewTypes.GRAPH_VIEW;
