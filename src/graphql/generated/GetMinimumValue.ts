/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMinimumValue
// ====================================================

export interface GetMinimumValue_minimumPackValue_data_attributes {
  __typename: "MinimumPackValue";
  MinimumValue: any;
}

export interface GetMinimumValue_minimumPackValue_data {
  __typename: "MinimumPackValueEntity";
  attributes: GetMinimumValue_minimumPackValue_data_attributes | null;
}

export interface GetMinimumValue_minimumPackValue {
  __typename: "MinimumPackValueEntityResponse";
  data: GetMinimumValue_minimumPackValue_data | null;
}

export interface GetMinimumValue {
  minimumPackValue: GetMinimumValue_minimumPackValue | null;
}
