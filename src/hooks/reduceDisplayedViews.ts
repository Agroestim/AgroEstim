import {
  ReducerActionPropType,
  ReducerStatePropType,
} from "@/types/DisplayedViewReducer";

export function reduceDisplayedViews(
  state: ReducerStatePropType,
  action: ReducerActionPropType
) {
  switch (action.type) {
    case "update_chart_view":
      return {
        ...state,
        showChartView: !state.showChartView,
      };
    case "update_table_view":
      return {
        ...state,
        showTableView: !state.showTableView,
      };
  }
}
