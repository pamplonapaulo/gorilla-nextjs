/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PLANS
// ====================================================

export interface GET_PLANS_periods_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GET_PLANS_periods_data {
  __typename: "PeriodEntity";
  id: string | null;
  attributes: GET_PLANS_periods_data_attributes | null;
}

export interface GET_PLANS_periods {
  __typename: "PeriodEntityResponseCollection";
  data: GET_PLANS_periods_data[];
}

export interface GET_PLANS {
  periods: GET_PLANS_periods | null;
}
