import { Button } from "../common/buttons/styled";
import { ControlForm } from "./ControlForm";
import {
  AsideControlPanelLayout,
  AsideControlPanelWrapper,
  ControlQuerySelection,
} from "./styles";

export function AsideControlPanel() {
  return (
    <AsideControlPanelWrapper>
      <AsideControlPanelLayout>
        <ControlQuerySelection>
          <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
            Ranking por localidad
          </Button>
          <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
            Comparador de variedades
          </Button>
          <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
            Compadador de campañas
          </Button>
          <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
            Caracterìsticas de los cultivares
          </Button>
        </ControlQuerySelection>
        <ControlForm></ControlForm>
      </AsideControlPanelLayout>
    </AsideControlPanelWrapper>
  );
}
