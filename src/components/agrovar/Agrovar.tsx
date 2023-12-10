import { Divider } from "../common/divider/styled";
import { AgrovarSettings } from "./OperationSearchForm";
import { MixedSearchFormComponent } from "./forms/MixedFormComponent";
import { Aside, ContainerLayout, Main } from "./styles";
import { MixedViewComponent } from "./views/MixedViewComponent";

export function AgrovarViewComponent() {
  document.title = "Agrovar - Indice";
  //NOTE: The first thing the application should do is perform a pre-flight query to load the necessary assets and data for later querying.
  //TODO: Design a hook to perform this.

  return (
    <ContainerLayout>
      <Aside>
        <AgrovarSettings />
        <Divider />
        <MixedSearchFormComponent />
      </Aside>
      <Main>
        <MixedViewComponent />
      </Main>
    </ContainerLayout>
  );
}
