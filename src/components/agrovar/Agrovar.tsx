import { SearchFormComponent } from "./forms/SearchFormComponent";
import { GraphViewComponent } from "./graph/GrapViewComponent";
import {
  AsideLayout,
  AsideWrapper,
  ContainerLayout,
  MainLayout,
  MainWrapper,
} from "./styles";

export function AgrovarViewComponent() {
  document.title = "Agrovar - Indice";

  return (
    <ContainerLayout>
      <AsideWrapper>
        <AsideLayout>
          <SearchFormComponent />
        </AsideLayout>
      </AsideWrapper>
      <MainWrapper>
        <MainLayout>
          <GraphViewComponent />
        </MainLayout>
      </MainWrapper>
    </ContainerLayout>
  );
}
