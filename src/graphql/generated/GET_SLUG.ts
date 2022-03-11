/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_SLUG
// ====================================================

export interface GET_SLUG_pack_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  Benefit: string;
}

export interface GET_SLUG_pack_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GET_SLUG_pack_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface GET_SLUG_pack_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: GET_SLUG_pack_data_attributes_Benefits_benefits_data[];
}

export interface GET_SLUG_pack_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: GET_SLUG_pack_data_attributes_Benefits_benefits | null;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image_data_attributes {
  __typename: "UploadFile";
  ext: string | null;
  url: string;
  hash: string;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image_data {
  __typename: "UploadFileEntity";
  attributes: GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image_data_attributes | null;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image {
  __typename: "UploadFileEntityResponse";
  data: GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image_data | null;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data_attributes_NutritionFacts {
  __typename: "ComponentNutritionFactsNutritionFacts";
  Portion: number;
  TotalFat: number;
  SaturatedFat: number;
  TransFat: number;
  EnergeticValue: number;
  Carbohydrates: number;
  Sodium: number;
  Proteins: number;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  Image: GET_SLUG_pack_data_attributes_Item_product_data_attributes_Image;
  NutritionFacts: GET_SLUG_pack_data_attributes_Item_product_data_attributes_NutritionFacts;
}

export interface GET_SLUG_pack_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GET_SLUG_pack_data_attributes_Item_product_data_attributes | null;
}

export interface GET_SLUG_pack_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: GET_SLUG_pack_data_attributes_Item_product_data | null;
}

export interface GET_SLUG_pack_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: GET_SLUG_pack_data_attributes_Item_product | null;
}

export interface GET_SLUG_pack_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string;
  ExtraDiscount: number;
  Benefits: GET_SLUG_pack_data_attributes_Benefits[];
  Item: (GET_SLUG_pack_data_attributes_Item | null)[];
}

export interface GET_SLUG_pack_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: GET_SLUG_pack_data_attributes | null;
}

export interface GET_SLUG_pack {
  __typename: "PackEntityResponse";
  data: GET_SLUG_pack_data | null;
}

export interface GET_SLUG {
  pack: GET_SLUG_pack | null;
}

export interface GET_SLUGVariables {
  id: string;
}
