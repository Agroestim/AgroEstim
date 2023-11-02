import { GRAPHQL_QUERY_SEARCH_OPERATION } from "@/config/storageKeys";
import {
  QueryAction,
  QueryActionTypes,
  QueryPayload,
  QueryTypes,
} from "@/types/QueryTypes";

export default function setQueryAction(payload: QueryPayload): QueryAction {
  const { type } = payload || {};

  localStorage.setItem(
    GRAPHQL_QUERY_SEARCH_OPERATION,
    type || QueryTypes.varietyComparator
  );

  return {
    type: QueryActionTypes.SET_QUERY,
    payload,
  };
}
