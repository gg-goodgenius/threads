/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEvent
// ====================================================

export interface GetEvent_event_tags {
  __typename: "TagGraphQLType";
  name: string;
  color: string;
}

export interface GetEvent_event_metro {
  __typename: "MetroGraphQLType";
  name: string;
  color: string;
}

export interface GetEvent_event {
  __typename: "VolunteerEventGraphQLType";
  id: number | null;
  title: string;
  tags: GetEvent_event_tags[];
  image: string | null;
  dateEvent: any | null;
  metro: GetEvent_event_metro | null;
  descriptionOther: string | null;
}

export interface GetEvent {
  /**
   * Волонтерство
   */
  event: GetEvent_event | null;
}

export interface GetEventVariables {
  id: number;
}
