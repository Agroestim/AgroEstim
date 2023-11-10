import { ReducerActionPropType } from "@/types/DisplayedViewReducer";
import React from "react";
import LocationRankingForm from "./LocationRankingForm";
import VarietycomparatorForm from "./VarietyComparatorForm";

type DispatchViewProp = { dispatchView: React.Dispatch<ReducerActionPropType> };

export function GraphqlQueryFormComponent({ dispatchView }: DispatchViewProp) {
  return (
    <>
      <LocationRankingForm />
      <VarietycomparatorForm />
    </>
  );
}
