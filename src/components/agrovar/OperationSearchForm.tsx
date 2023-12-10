import { useDispatchToggleOpsFormType } from "@/hooks/agrovar/useDispatchToggleFormType";
import { useDispatchToggleViewType } from "@/hooks/agrovar/useDispatchToggleViewType";
import { Button } from "../common/buttons/styled";
import { SettingsContainer } from "./forms/styled";

export function AgrovarSettings() {
  const { handleToggleClick: handleToggleViewTypeClick } =
    useDispatchToggleViewType();
  const { handleToggleClick: handleToggleFormTypeClick } =
    useDispatchToggleOpsFormType();
  return (
    <SettingsContainer>
      <Button
        onClick={handleToggleFormTypeClick}
        value="TOGGLE_LOCATION_RANKING_FORM"
      >
        Ranking por localidad
      </Button>
      <Button
        onClick={handleToggleFormTypeClick}
        value="TOGGLE_VARIETY_COMPARATOR_FORM"
      >
        Comparador de variedades
      </Button>

      <Button onClick={handleToggleViewTypeClick} value="TOGGLE_CHART_VIEW">
        Vista en tabla
      </Button>
      <Button onClick={handleToggleViewTypeClick} value="TOGGLE_GRAPH_VIEW">
        Vista en grafico
      </Button>
    </SettingsContainer>
  );
}
