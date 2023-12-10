import { AgrovarOpsFormTypes } from "@/types/agrovar/ComponentTypes";
import { AgrovarToggleOpsFormActions } from "@/types/agrovar/HooksTypes";
import {
  AgrovarActionTypes,
  AgrovarOpsFormAction,
} from "@/types/agrovar/ReduxTypes";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export function useDispatchToggleOpsFormType() {
  const dispatch = useDispatch<Dispatch<AgrovarOpsFormAction>>();

  function handleToggleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { value } = event.currentTarget;

    switch (value) {
      case AgrovarToggleOpsFormActions.TOGGLE_LOCATION_RANKING_FORM:
        dispatch({
          type: AgrovarActionTypes.UPDATE_FORM,
          payload: { formType: AgrovarOpsFormTypes.LOCATION_RANKING_FORM },
        });
        break;

      case AgrovarToggleOpsFormActions.TOGGLE_VARIETY_COMPARATOR_FORM:
        dispatch({
          type: AgrovarActionTypes.UPDATE_FORM,
          payload: { formType: AgrovarOpsFormTypes.VARIETY_COMPARATOR_FORM },
        });
        break;
    }
  }

  return { handleToggleClick };
}
