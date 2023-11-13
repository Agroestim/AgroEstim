import { Button } from "@/components/common/buttons/styled";
import { DispatchViewProp } from "@/types/DisplayedViewReducer";
import React, { useState } from "react";
import LocationRankingForm from "./LocationRankingForm";
import VarietycomparatorForm from "./VarietyComparatorForm";

export function GraphqlQueryFormComponent({ dispatchView }: DispatchViewProp) {
  const [state, dispatch] = useState({});

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { value } = e.currentTarget;
    if (value == undefined || typeof value == "undefined") return;

    // TODO: Handle click and change view.
    switch (value) {
      case "":
    }
  }
  return (
    <>
      <Button onClick={handleClick} value="location_ranking">
        Ranking por localidad
      </Button>
      <Button value="variety_comparation">Comparador de variedades</Button>
      <LocationRankingForm />
      <VarietycomparatorForm />
    </>
  );
}
