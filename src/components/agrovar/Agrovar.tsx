import { reduceDisplayedViews } from "@/hooks/reduceDisplayedViews";
import { useReducer } from "react";
import { GraphqlQueryFormComponent } from "./forms/GraphqlForm";
import { ChartViewcomponent } from "./graph/ChartView";
import { TableViewComponent } from "./graph/TableView";
import {
  AsideLayout,
  AsideWrapper,
  ContainerLayout,
  MainViewLayout,
  MainViewWrapper,
} from "./styles";

export function AgrovarViewComponent() {
  document.title = "Agrovar - Indice";
  const initialDisplayedViews = { showTableView: true, showChartView: false };
  const [displayedViewsState, dispatchDisplayedViews] = useReducer(
    reduceDisplayedViews,
    initialDisplayedViews
  );
  return (
    <ContainerLayout>
      <AsideWrapper>
        <AsideLayout>
          <GraphqlQueryFormComponent dispatchView={dispatchDisplayedViews} />
        </AsideLayout>
      </AsideWrapper>
      <MainViewWrapper>
        <MainViewLayout>
          {/* <FetchStatusWrapper>
          {error ? <span>{error?.message}</span> : null}
          {loading ? <Spinner /> : null}
          </FetchStatusWrapper> */}

          <TableViewComponent
            hiddeView={displayedViewsState.showTableView}
          ></TableViewComponent>
          <ChartViewcomponent
            hiddeView={displayedViewsState.showChartView}
          ></ChartViewcomponent>
        </MainViewLayout>
      </MainViewWrapper>
    </ContainerLayout>
  );
}
