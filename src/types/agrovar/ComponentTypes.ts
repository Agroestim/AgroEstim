/**
 * Defines the views of view types supported by the application.
 * It's means that data representation will adapt to a specific chart type, like bar chart or similars.
 */
export enum AgrovarViewTypes {
  TABLE_VIEW = "CHART_VIEW",
  GRAPH_VIEW = "GRAPH_VIEW",
}

/**
 * Simplifying enum `AgrovarViewTypes`.
 */
export type AgrovarViewType =
  | AgrovarViewTypes.TABLE_VIEW
  | AgrovarViewTypes.GRAPH_VIEW;

/**
 * Defines the forms of search operations supported by the application.
 * It's allows make preflight queries based on itself form data.
 */
export enum AgrovarOpsFormTypes {
  LOCATION_RANKING_FORM = "LOCATION_RANKING_VIEW",
  VARIETY_COMPARATOR_FORM = "VARIETY_COMPARATOR_FORM",
}

/**
 * Simplifying enum `AgrovarOpsFormTypes`.
 */
export type AgrovarOpsFormType =
  | AgrovarOpsFormTypes.LOCATION_RANKING_FORM
  | AgrovarOpsFormTypes.VARIETY_COMPARATOR_FORM;
