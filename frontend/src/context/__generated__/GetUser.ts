/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_getUser {
  __typename: "UserGraphQLType";
  id: string;
  firstName: string;
  lastName: string;
}

export interface GetUser {
  /**
   * Пользователь
   */
  getUser: GetUser_getUser | null;
}
