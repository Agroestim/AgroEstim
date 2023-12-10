import { DocumentNode } from "graphql";
import { AgrovarOpsFormType } from "./ComponentTypes";

export interface AgrovarKindFormComponent<TState extends object> {
  /**
   * Graphql preflight query definition.
   *
   * @description Defines the query
   */
  preflightQuery: DocumentNode;

  /**
   * Graphql operational query definition.
   */
  operationQuery: DocumentNode;

  /**
   * Kind form component definition.
   *
   * @description Defines what kind of the form component correspond to.
   */
  kind: AgrovarOpsFormType;

  internalState: { state: TState; dispatch: React.Dispatch<TState> };
}
