import { gql } from "@apollo/client";

export const GQL_VARIETY_GROUP_PREFLIGHT_QUERY = gql`
  {
    varietyOptionsList
    locationOptionsList
    campaignOptionsList
  }
`;
