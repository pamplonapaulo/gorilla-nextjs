/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPacks
// ====================================================

export interface GetPacks_packs_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  Benefit: string;
}

export interface GetPacks_packs_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface GetPacks_packs_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: GetPacks_packs_data_attributes_Benefits_benefits_data[];
}

export interface GetPacks_packs_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: GetPacks_packs_data_attributes_Benefits_benefits | null;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
}

export interface GetPacks_packs_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes_Item_product_data_attributes | null;
}

export interface GetPacks_packs_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: GetPacks_packs_data_attributes_Item_product_data | null;
}

export interface GetPacks_packs_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: GetPacks_packs_data_attributes_Item_product | null;
}

export interface GetPacks_packs_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string;
  ExtraDiscount: number;
  Benefits: GetPacks_packs_data_attributes_Benefits[];
  Item: (GetPacks_packs_data_attributes_Item | null)[];
}

export interface GetPacks_packs_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes | null;
}

export interface GetPacks_packs {
  __typename: "PackEntityResponseCollection";
  data: GetPacks_packs_data[];
}

export interface GetPacks {
  packs: GetPacks_packs | null;
}
