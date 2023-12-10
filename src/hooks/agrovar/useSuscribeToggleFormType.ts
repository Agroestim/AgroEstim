import RootState from "@/store/rootState";
import {
  AgrovarOpsFormType,
  AgrovarOpsFormTypes,
} from "@/types/agrovar/ComponentTypes";
import { useState } from "react";
import { useStore } from "react-redux";

export function useSuscribeToggleOpsFormType() {
  const store = useStore<RootState>();
  const initialState = AgrovarOpsFormTypes.LOCATION_RANKING_FORM;
  const [opFormTypeState, setOpFormType] =
    useState<AgrovarOpsFormType>(initialState);

  function suscribeListener() {
    const storedFormType = store.getState().AgrovarForm.formType;
    setOpFormType(storedFormType);
  }

  const unsuscribe = store.subscribe(suscribeListener);

  function unsuscribeEffectCallback() {
    return unsuscribe;
  }

  return { opFormTypeState, unsuscribeEffectCallback };
}
