import { Divider } from "@/components/common/divider/styled";
import { useDispatchToggleViewType } from "@/hooks/agrovar/useDispatchToggleViewType";
import { Button } from "@components/common/buttons/styled";
import LocationRankingForm from "./LocationRankingForm";
import VarietycomparatorForm from "./VarietyComparatorForm";
import { SearchSettingsContainer } from "./styled";

export function SearchFormComponent() {
  const { handleToggleClick } = useDispatchToggleViewType();
  return (
    <>
      <SearchSettingsContainer>
        <Button value="TOGGLE_LOCATION_RANKING_FORM">
          Ranking por localidad
        </Button>
        <Button value="TOGGLE_VARIETY_COMPARATOR_FORM">
          Comparador de variedades
        </Button>

        <Button onClick={handleToggleClick} value="TOGGLE_CHART_VIEW">
          Vista en tabla
        </Button>
        <Button onClick={handleToggleClick} value="TOGGLE_GRAPH_VIEW">
          Vista en grafico
        </Button>
      </SearchSettingsContainer>
      <Divider />

      <LocationRankingForm />
      <VarietycomparatorForm />
    </>
  );
}
