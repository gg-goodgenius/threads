/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEventsTrainee
// ====================================================

export interface GetEventsTrainee_events_metro {
  __typename: "MetroGraphQLType";
  name: string;
  color: string;
}

export interface GetEventsTrainee_events {
  __typename: "InternEventGraphQLType";
  id: number | null;
  title: string;
  organization: string;
  image: string | null;
  metro: GetEventsTrainee_events_metro | null;
  dateStartRequest: any | null;
  description: string | null;
}

export interface GetEventsTrainee {
  /**
   * Список стажировок
   */
  events: (GetEventsTrainee_events | null)[] | null;
}
