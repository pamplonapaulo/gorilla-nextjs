/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_BENEFITS
// ====================================================

export interface GET_BENEFITS_benefits_data_attributes {
  __typename: "Benefit";
  Benefit: string;
}

export interface GET_BENEFITS_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GET_BENEFITS_benefits_data_attributes | null;
}

export interface GET_BENEFITS_benefits {
  __typename: "BenefitEntityResponseCollection";
  data: GET_BENEFITS_benefits_data[];
}

export interface GET_BENEFITS {
  benefits: GET_BENEFITS_benefits | null;
}
