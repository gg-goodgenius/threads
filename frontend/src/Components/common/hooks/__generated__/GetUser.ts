/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  __typename: "UserGraphQLType";
  id: number | null;
  firstName: string;
  lastName: string;
}

export interface GetUser {
  /**
   * Пользователь
   */
  user: GetUser_user | null;
}

export interface GetUserVariables {
  id: number;
}
