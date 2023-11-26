import { gql } from "@apollo/client";

export const GET_LOCATION_RANKING_QUERY = gql`
  query getLocationRanking($locations: [String]!) {
    locationRanking(locations: $locations) {
      paperReference
      documentId
      longitude
      location
      latitude
      paperType
      year
      paperPepetition
      paperFk {
        grainsCount
        grainsPerSpike
        humidityPercentage
        paperId
        performance
        ph
        relativePerformance
        proteinsPercentage
        variety
        weightPerThousandGrains
      }
    }
  }
`;

export const GET_VARIETIES_COMPARATION_QUERY = gql`
  query getVarietiesComparationQuery($varieties: [String]!) {
    varietyComparator(varieties: $varieties) {
      documentId
      latitude
      location
      longitude
      paperPepetition
      paperType
      year
      paperReference
      paperFk {
        grainsCount
        grainsPerSpike
        humidityPercentage
        paperId
        performance
        ph
        proteinsPercentage
        relativePerformance
        variety
        weightPerThousandGrains
      }
    }
  }
`;

/**
 * A set of possible operations which can made.
 */
export const GRAPHQL_QUERY_SET = {
  location_ranking: GET_LOCATION_RANKING_QUERY,
  variety_comparator: GET_VARIETIES_COMPARATION_QUERY,
};
