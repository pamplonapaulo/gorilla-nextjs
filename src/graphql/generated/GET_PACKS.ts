/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PACKS
// ====================================================

export interface GET_PACKS_packs_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  Benefit: string;
}

export interface GET_PACKS_packs_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GET_PACKS_packs_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface GET_PACKS_packs_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: GET_PACKS_packs_data_attributes_Benefits_benefits_data[];
}

export interface GET_PACKS_packs_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: GET_PACKS_packs_data_attributes_Benefits_benefits | null;
}

export interface GET_PACKS_packs_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
}

export interface GET_PACKS_packs_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GET_PACKS_packs_data_attributes_Item_product_data_attributes | null;
}

export interface GET_PACKS_packs_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: GET_PACKS_packs_data_attributes_Item_product_data | null;
}

export interface GET_PACKS_packs_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: GET_PACKS_packs_data_attributes_Item_product | null;
}

export interface GET_PACKS_packs_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string;
  ExtraDiscount: number;
  Benefits: GET_PACKS_packs_data_attributes_Benefits[];
  Item: (GET_PACKS_packs_data_attributes_Item | null)[];
}

export interface GET_PACKS_packs_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: GET_PACKS_packs_data_attributes | null;
}

export interface GET_PACKS_packs {
  __typename: "PackEntityResponseCollection";
  data: GET_PACKS_packs_data[];
}

export interface GET_PACKS {
  packs: GET_PACKS_packs | null;
}
