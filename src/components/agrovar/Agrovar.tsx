import { SearchFormComponent } from "./forms/SearchFormComponent";
import { Aside, ContainerLayout, Main } from "./styles";
import { MixedViewComponent } from "./views/MixedViewComponent";

export function AgrovarViewComponent() {
  document.title = "Agrovar - Indice";

  return (
    <ContainerLayout>
      <Aside>
        <SearchFormComponent />
      </Aside>
      <Main>
        <MixedViewComponent />
      </Main>
    </ContainerLayout>
  );
}
