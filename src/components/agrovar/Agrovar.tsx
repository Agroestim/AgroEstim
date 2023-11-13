import { reduceDisplayedViews } from "@/hooks/reduceDisplayedViews";
import { useReducer } from "react";
import { GraphqlQueryFormComponent } from "./forms/GraphqlForm";
import { ChartViewcomponent } from "./graph/ChartView";
import { TableViewComponent } from "./graph/TableView";
import {
  AsideLayout,
  AsideWrapper,
  ContainerLayout,
  MainLayout,
  MainWrapper,
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
      <MainWrapper>
        <MainLayout>
          {/* <FetchStatusWrapper>
          {error ? <span>{error?.message}</span> : null}
        {loading ? <Spinner /> : null}
        </FetchStatusWrapper> */}

          {/* NOTE: Para evitar problemas al momento de renderizar las
          vistas, se pasa la condicion a ser renderizado como `prop`.*/}
          <TableViewComponent hiddeView={displayedViewsState.showTableView} />
          <ChartViewcomponent hiddeView={displayedViewsState.showChartView} />
        </MainLayout>
      </MainWrapper>
    </ContainerLayout>
  );
}
