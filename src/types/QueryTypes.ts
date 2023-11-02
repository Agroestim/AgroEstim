import { TechnicalDataType } from "@/graphql/QueryTypes";

export enum QueryTypes {
  locationRanking = "location_ranking",
  varietyComparator = "variety_comparator",
}

export type QueryType =
  | QueryTypes.locationRanking
  | QueryTypes.varietyComparator;

export type QueryPayload = { type: QueryType };

export enum QueryActionTypes {
  SET_QUERY = "SET_QUERY",
}

export type QueryAction = {
  type: QueryActionTypes.SET_QUERY;
  payload: QueryPayload;
};

export type GlobalQuery = {
  [QueryTypes.locationRanking]: TechnicalDataType;
  [QueryTypes.varietyComparator]: TechnicalDataType;
};
