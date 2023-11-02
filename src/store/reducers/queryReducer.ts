import { GRAPHQL_QUERY_SEARCH_OPERATION } from "@/config/storageKeys";
import {
  QueryAction,
  QueryActionTypes,
  QueryPayload,
  QueryType,
  QueryTypes,
} from "@/types/QueryTypes";

const queryType =
  (localStorage.getItem(GRAPHQL_QUERY_SEARCH_OPERATION) as QueryType) ||
  QueryTypes.varietyComparator;

const initialState: QueryPayload = {
  type: queryType,
};

export default function queryReducer(
  state: QueryPayload = initialState,
  action: QueryAction
) {
  const { type, payload } = action;

  switch (type) {
    case QueryActionTypes.SET_QUERY:
      return { ...state, ...payload };

    default:
      return state;
  }
}
