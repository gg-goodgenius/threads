/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubscribeEvent
// ====================================================

export interface SubscribeEvent_subscribeEvent {
  __typename: "SubscribeEventMutation";
  /**
   * Результат
   */
  ok: boolean | null;
}

export interface SubscribeEvent {
  /**
   * Подписаться на ивент  
   */
  subscribeEvent: SubscribeEvent_subscribeEvent | null;
}

export interface SubscribeEventVariables {
  id: number;
}
