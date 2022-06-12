/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTags
// ====================================================

export interface GetTags_tags {
  __typename: "TagGraphQLType";
  id: number | null;
  name: string;
  color: string;
}

export interface GetTags {
  /**
   * Список тегов
   */
  tags: (GetTags_tags | null)[] | null;
}
