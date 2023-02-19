/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSlug
// ====================================================

export interface GetSlug_pack_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  benefit: string;
}

export interface GetSlug_pack_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GetSlug_pack_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface GetSlug_pack_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: GetSlug_pack_data_attributes_Benefits_benefits_data[];
}

export interface GetSlug_pack_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: GetSlug_pack_data_attributes_Benefits_benefits | null;
}

export interface GetSlug_pack_data_attributes_Item_product_data_attributes_Image_data_attributes {
  __typename: "UploadFile";
  ext: string | null;
  url: string;
  hash: string;
}

export interface GetSlug_pack_data_attributes_Item_product_data_attributes_Image_data {
  __typename: "UploadFileEntity";
  attributes: GetSlug_pack_data_attributes_Item_product_data_attributes_Image_data_attributes | null;
}

export interface GetSlug_pack_data_attributes_Item_product_data_attributes_Image {
  __typename: "UploadFileEntityResponse";
  data: GetSlug_pack_data_attributes_Item_product_data_attributes_Image_data | null;
}

export interface GetSlug_pack_data_attributes_Item_product_data_attributes_NutritionFacts {
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

export interface GetSlug_pack_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  Image: GetSlug_pack_data_attributes_Item_product_data_attributes_Image;
  NutritionFacts: GetSlug_pack_data_attributes_Item_product_data_attributes_NutritionFacts;
}

export interface GetSlug_pack_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetSlug_pack_data_attributes_Item_product_data_attributes | null;
}

export interface GetSlug_pack_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: GetSlug_pack_data_attributes_Item_product_data | null;
}

export interface GetSlug_pack_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: GetSlug_pack_data_attributes_Item_product | null;
}

export interface GetSlug_pack_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string | null;
  ExtraDiscount: number | null;
  Benefits: GetSlug_pack_data_attributes_Benefits[];
  Item: (GetSlug_pack_data_attributes_Item | null)[];
}

export interface GetSlug_pack_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: GetSlug_pack_data_attributes | null;
}

export interface GetSlug_pack {
  __typename: "PackEntityResponse";
  data: GetSlug_pack_data | null;
}

export interface GetSlug {
  pack: GetSlug_pack | null;
}

export interface GetSlugVariables {
  id: string;
}
