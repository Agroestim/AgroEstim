import { useSuscribeToggleViewType } from "@/hooks/agrovar/useSuscribeToggleViewType";
import { AgrovarViewTypes } from "@/types/AgrovarViewTypes";
import { useEffect } from "react";
import { ChartViewcomponent } from "./ChartView";
import { TableViewComponent } from "./TableView";

export function MixedViewComponent() {
  const { viewTypeState, unsuscribeEffectCallback } =
    useSuscribeToggleViewType();

  // NOTE: Unsuscribe to the store when this view is unmounted.
  useEffect(() => unsuscribeEffectCallback());
  return (
    <>
      {viewTypeState === AgrovarViewTypes.TABLE_VIEW ? (
        <TableViewComponent />
      ) : null}
      {viewTypeState === AgrovarViewTypes.GRAPH_VIEW ? (
        <ChartViewcomponent />
      ) : null}
    </>
  );
}
