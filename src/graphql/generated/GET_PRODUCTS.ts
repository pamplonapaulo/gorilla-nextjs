/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCTS
// ====================================================

export interface GET_PRODUCTS_products_data_attributes_Image_data_attributes {
  __typename: "UploadFile";
  ext: string | null;
  url: string;
  hash: string;
}

export interface GET_PRODUCTS_products_data_attributes_Image_data {
  __typename: "UploadFileEntity";
  attributes: GET_PRODUCTS_products_data_attributes_Image_data_attributes | null;
}

export interface GET_PRODUCTS_products_data_attributes_Image {
  __typename: "UploadFileEntityResponse";
  data: GET_PRODUCTS_products_data_attributes_Image_data | null;
}

export interface GET_PRODUCTS_products_data_attributes_NutritionFacts {
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

export interface GET_PRODUCTS_products_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
  Image: GET_PRODUCTS_products_data_attributes_Image;
  NutritionFacts: GET_PRODUCTS_products_data_attributes_NutritionFacts;
}

export interface GET_PRODUCTS_products_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GET_PRODUCTS_products_data_attributes | null;
}

export interface GET_PRODUCTS_products {
  __typename: "ProductEntityResponseCollection";
  data: GET_PRODUCTS_products_data[];
}

export interface GET_PRODUCTS_periods_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GET_PRODUCTS_periods_data {
  __typename: "PeriodEntity";
  id: string | null;
  attributes: GET_PRODUCTS_periods_data_attributes | null;
}

export interface GET_PRODUCTS_periods {
  __typename: "PeriodEntityResponseCollection";
  data: GET_PRODUCTS_periods_data[];
}

export interface GET_PRODUCTS {
  products: GET_PRODUCTS_products | null;
  periods: GET_PRODUCTS_periods | null;
}
