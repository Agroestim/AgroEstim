import { AsideViewComponent } from "./AsideView";
import { MainViewComponent } from "./MainView";
import { ContainerLayout } from "./styles";

export function AgrovarViewComponent() {
  return (
    <ContainerLayout>
      <AsideViewComponent />
      <MainViewComponent />
    </ContainerLayout>
  );
}
