/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlans
// ====================================================

export interface GetPlans_periods_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetPlans_periods_data {
  __typename: "PeriodEntity";
  id: string | null;
  attributes: GetPlans_periods_data_attributes | null;
}

export interface GetPlans_periods {
  __typename: "PeriodEntityResponseCollection";
  data: GetPlans_periods_data[];
}

export interface GetPlans {
  periods: GetPlans_periods | null;
}
