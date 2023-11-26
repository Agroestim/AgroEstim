import RootState from "@/store/rootState";
import { AgrovarViewType, AgrovarViewTypes } from "@/types/AgrovarViewTypes";
import { useState } from "react";
import { useStore } from "react-redux";

export function useSuscribeToggleViewType() {
  const store = useStore<RootState>();
  const initialState = AgrovarViewTypes.TABLE_VIEW;
  const [viewTypeState, setViewType] = useState<AgrovarViewType>(initialState);

  function suscribeListener() {
    const storedViewType = store.getState().AgrovarView.viewType;
    setViewType(storedViewType);
  }
  const unsuscribe = store.subscribe(suscribeListener);

  function unsuscribeEffectCallback() {
    return unsuscribe;
  }

  return { viewTypeState, unsuscribeEffectCallback };
}
