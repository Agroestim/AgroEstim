import { AsideControlPanel } from "./AsideControlPanel";
import { MainView } from "./MainView";
import { ContainerLayout } from "./styles";

export function Agrovar() {
  return (
    <ContainerLayout>
      <AsideControlPanel></AsideControlPanel>

      <MainView></MainView>
    </ContainerLayout>
  );
}
