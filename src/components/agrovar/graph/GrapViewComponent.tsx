import { ChartViewcomponent } from "./ChartView";
import { TableViewComponent } from "./TableView";

export function GraphViewComponent() {
  return (
    <>
      <TableViewComponent />
      <ChartViewcomponent />
    </>
  );
}
