/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MINIMUM_VALUE
// ====================================================

export interface GET_MINIMUM_VALUE_minimumPackValue_data_attributes {
  __typename: "MinimumPackValue";
  MinimumValue: number;
}

export interface GET_MINIMUM_VALUE_minimumPackValue_data {
  __typename: "MinimumPackValueEntity";
  attributes: GET_MINIMUM_VALUE_minimumPackValue_data_attributes | null;
}

export interface GET_MINIMUM_VALUE_minimumPackValue {
  __typename: "MinimumPackValueEntityResponse";
  data: GET_MINIMUM_VALUE_minimumPackValue_data | null;
}

export interface GET_MINIMUM_VALUE {
  minimumPackValue: GET_MINIMUM_VALUE_minimumPackValue | null;
}
