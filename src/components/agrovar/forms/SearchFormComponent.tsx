import { Button } from "@components/common/buttons/styled";
import LocationRankingForm from "./LocationRankingForm";
import VarietycomparatorForm from "./VarietyComparatorForm";
import { ConfigWrapper } from "./styled";

export function SearchFormComponent() {
  return (
    <>
      <ConfigWrapper>
        {/* TODO: Implements a slide button -> More intuitive */}
        <Button value="TOGGLE_LOCATION_RANKING_FORM">
          Ranking por localidad
        </Button>
        <Button value="TOGGLE_VARIETY_COMPARATOR_FORM">
          Comparador de variedades
        </Button>

        <Button value="TOGGLE_TABLE_VIEW">Vista en tabla</Button>
        <Button value="TOGGLE_GRAPH_VIEW">Vista en grafico</Button>
      </ConfigWrapper>

      <LocationRankingForm />
      <VarietycomparatorForm />
    </>
  );
}
