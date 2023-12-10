import { useSuscribeToggleOpsFormType } from "@/hooks/agrovar/useSuscribeToggleFormType";
import { AgrovarOpsFormTypes } from "@/types/agrovar/ComponentTypes";
import { useEffect } from "react";
import LocationRankingForm from "./LocationRankingForm";
import VarietycomparatorForm from "./VarietyComparatorForm";

export function MixedSearchFormComponent() {
  const { opFormTypeState, unsuscribeEffectCallback } =
    useSuscribeToggleOpsFormType();

  useEffect(() => unsuscribeEffectCallback());
  return (
    <>
      {opFormTypeState === AgrovarOpsFormTypes.LOCATION_RANKING_FORM ? (
        <LocationRankingForm />
      ) : null}

      {opFormTypeState === AgrovarOpsFormTypes.VARIETY_COMPARATOR_FORM ? (
        <VarietycomparatorForm />
      ) : null}
    </>
  );
}
