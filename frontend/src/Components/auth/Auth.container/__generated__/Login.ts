/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "ObtainJSONWebToken";
  payload: any;
  token: string;
}

export interface Login {
  /**
   * Obtain JSON Web Token mutation
   */
  login: Login_login | null;
}

export interface LoginVariables {
  email: string;
  password: string;
}
