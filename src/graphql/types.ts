/**
 * ### GraphQL General-Propose Type
 * THis type represents a crop variety technical data query.
 */
type VarietyTechnicalDataType = {
  grainsCount: number;
  grainsPerSpike: number;
  humidityPercentage: number;
  paperId: string;
  performance: number;
  relativePerformance: number;
  ph: number;
  proteinsPercentage: number;
  variety: string;
  weightPerThousand: number;
};

/**
 * ### GraphQL General-Propose Type
 * This type represents a typical Graphql query set for any cases.
 *
 */
export type TechnicalDataType = {
  /**
   * Represents the autor of this paper.
   *
   * NOTE: Possible choices are:
   * - RED_INTA_2022
   * - INTA_LABOULAYE
   */
  paperReference: string;

  /**
   * Represents the primary key of this entry.
   *
   * NOTE: Is an autoincrement field.
   */
  documentId: number;

  /**
   * Rrepresents the city where was made the paper.
   *
   * NOTE: Possible choices are:
   * - ADELIA_MARIA
   * - BELL_VILLE
   * - JUSTINIANO_POSSE
   * - LA_CARLOTA
   * - LABOULAYE
   * - MARCOS_JUAREZ
   * - ONAGOITY
   */
  location: string;

  latitude: number;
  longitude: number;

  /**
   * Represents the paper type.
   *
   * NOTE: Possible choices are:
   * - VARIEDADES
   */
  paperType: string;

  year: Date;

  /**
   * Represents how many repetitions has each paper.
   *
   * NOTE: Normally start counting at 1 and ends at 2 repetitions.
   */
  paperRepetiton: number;

  /**
   * Represents a forgeing key which contains the crop-specific variety data.
   */
  paprFk: VarietyTechnicalDataType;
};
