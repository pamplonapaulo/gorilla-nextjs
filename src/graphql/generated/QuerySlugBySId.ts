/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QuerySlugBySId
// ====================================================

export interface QuerySlugBySId_pack_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  Benefit: string;
}

export interface QuerySlugBySId_pack_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: QuerySlugBySId_pack_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface QuerySlugBySId_pack_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: QuerySlugBySId_pack_data_attributes_Benefits_benefits_data[];
}

export interface QuerySlugBySId_pack_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: QuerySlugBySId_pack_data_attributes_Benefits_benefits | null;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image_data_attributes {
  __typename: "UploadFile";
  ext: string | null;
  url: string;
  hash: string;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image_data {
  __typename: "UploadFileEntity";
  attributes: QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image_data_attributes | null;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image {
  __typename: "UploadFileEntityResponse";
  data: QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image_data | null;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_NutritionFacts {
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

export interface QuerySlugBySId_pack_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  Image: QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_Image;
  NutritionFacts: QuerySlugBySId_pack_data_attributes_Item_product_data_attributes_NutritionFacts;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: QuerySlugBySId_pack_data_attributes_Item_product_data_attributes | null;
}

export interface QuerySlugBySId_pack_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: QuerySlugBySId_pack_data_attributes_Item_product_data | null;
}

export interface QuerySlugBySId_pack_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: QuerySlugBySId_pack_data_attributes_Item_product | null;
}

export interface QuerySlugBySId_pack_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string;
  ExtraDiscount: number;
  Benefits: (QuerySlugBySId_pack_data_attributes_Benefits | null)[] | null;
  Item: (QuerySlugBySId_pack_data_attributes_Item | null)[];
}

export interface QuerySlugBySId_pack_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: QuerySlugBySId_pack_data_attributes | null;
}

export interface QuerySlugBySId_pack {
  __typename: "PackEntityResponse";
  data: QuerySlugBySId_pack_data | null;
}

export interface QuerySlugBySId {
  pack: QuerySlugBySId_pack | null;
}

export interface QuerySlugBySIdVariables {
  id: string;
}
