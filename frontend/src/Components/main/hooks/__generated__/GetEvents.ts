/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEvents
// ====================================================

export interface GetEvents_events_tags {
  __typename: "TagGraphQLType";
  name: string;
  color: string;
}

export interface GetEvents_events_members {
  __typename: "UserGraphQLType";
  id: number | null;
  image: string | null;
}

export interface GetEvents_events {
  __typename: "VolunteerEventGraphQLType";
  id: number | null;
  image: string | null;
  title: string;
  tags: GetEvents_events_tags[];
  dateEvent: any | null;
  /**
   * Количество учатсников
   */
  memberCount: number | null;
  members: GetEvents_events_members[];
}

export interface GetEvents {
  /**
   * Список волонтерств
   */
  events: (GetEvents_events | null)[] | null;
}
