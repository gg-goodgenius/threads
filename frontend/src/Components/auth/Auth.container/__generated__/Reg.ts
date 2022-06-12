/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Reg
// ====================================================

export interface Reg_registrationUser {
  __typename: "RegistrationUser";
  /**
   * Токен
   */
  token: string | null;
}

export interface Reg {
  /**
   * Регистрация пользователя
   */
  registrationUser: Reg_registrationUser | null;
}

export interface RegVariables {
  email: string;
  password: string;
  typeAccount: number;
}
