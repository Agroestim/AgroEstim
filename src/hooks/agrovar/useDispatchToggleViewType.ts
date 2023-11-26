import { AgrovarToggleViewActions } from "@/types/AgrovarHooksTypes";
import {
  AgrovarActionTypes,
  AgrovarViewAction,
} from "@/types/AgrovarReduxTypes";
import { AgrovarViewTypes } from "@/types/AgrovarViewTypes";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export function useDispatchToggleViewType() {
  const dispatch = useDispatch<Dispatch<AgrovarViewAction>>();

  function handleToggleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { value } = event.currentTarget;

    switch (value) {
      case AgrovarToggleViewActions.TOGGLE_CHART_VIEW:
        dispatch({
          type: AgrovarActionTypes.UPDATE_VIEW,
          payload: { viewType: AgrovarViewTypes.TABLE_VIEW },
        });
        break;

      case AgrovarToggleViewActions.TOGGLE_GRAPH_VIEW:
        dispatch({
          type: AgrovarActionTypes.UPDATE_VIEW,
          payload: { viewType: AgrovarViewTypes.GRAPH_VIEW },
        });
        break;
    }
  }

  return { handleToggleClick };
}
