import { gql } from "@apollo/client";

export const GET_VARIETIES_QUERY = gql`
  query GetVarietyesRanking($varieties: [String]!) {
    varietyComparator(varieties: $varieties) {
      documentId
      latitude
      location
      longitude
      paperPepetition
      paperReference
      paperType
      year
    }
  }
`;
