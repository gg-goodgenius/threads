/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMetro
// ====================================================

export interface GetMetro_getMetres {
  __typename: "MetroGraphQLType";
  id: number | null;
  name: string;
  color: string;
}

export interface GetMetro {
  /**
   * Список станций метро
   */
  getMetres: (GetMetro_getMetres | null)[] | null;
}
