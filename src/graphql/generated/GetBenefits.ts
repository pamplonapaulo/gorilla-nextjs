/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBenefits
// ====================================================

export interface GetBenefits_benefits_data_attributes {
  __typename: "Benefit";
  benefit: string;
}

export interface GetBenefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GetBenefits_benefits_data_attributes | null;
}

export interface GetBenefits_benefits {
  __typename: "BenefitEntityResponseCollection";
  data: GetBenefits_benefits_data[];
}

export interface GetBenefits {
  benefits: GetBenefits_benefits | null;
}
