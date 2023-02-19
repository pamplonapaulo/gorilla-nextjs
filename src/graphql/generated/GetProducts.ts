/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_data_attributes_Image_data_attributes {
  __typename: "UploadFile";
  ext: string | null;
  url: string;
  hash: string;
}

export interface GetProducts_products_data_attributes_Image_data {
  __typename: "UploadFileEntity";
  attributes: GetProducts_products_data_attributes_Image_data_attributes | null;
}

export interface GetProducts_products_data_attributes_Image {
  __typename: "UploadFileEntityResponse";
  data: GetProducts_products_data_attributes_Image_data | null;
}

export interface GetProducts_products_data_attributes_NutritionFacts {
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

export interface GetProducts_products_data_attributes_prices_mensal {
  __typename: "ComponentPricesMensal";
  priceId: string;
  centavos: any;
}

export interface GetProducts_products_data_attributes_prices_trimestral {
  __typename: "ComponentPricesTrimestral";
  priceId: string;
  centavos: any;
}

export interface GetProducts_products_data_attributes_prices_semestral {
  __typename: "ComponentPricesSemestral";
  priceId: string;
  centavos: any;
}

export interface GetProducts_products_data_attributes_prices_anual {
  __typename: "ComponentPricesAnual";
  priceId: string;
  centavos: any;
}

export interface GetProducts_products_data_attributes_prices {
  __typename: "ComponentPricePrices";
  mensal: GetProducts_products_data_attributes_prices_mensal;
  trimestral: GetProducts_products_data_attributes_prices_trimestral;
  semestral: GetProducts_products_data_attributes_prices_semestral;
  anual: GetProducts_products_data_attributes_prices_anual;
}

export interface GetProducts_products_data_attributes {
  __typename: "Product";
  Name: string;
  Image: GetProducts_products_data_attributes_Image;
  NutritionFacts: GetProducts_products_data_attributes_NutritionFacts;
  prices: GetProducts_products_data_attributes_prices;
}

export interface GetProducts_products_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetProducts_products_data_attributes | null;
}

export interface GetProducts_products {
  __typename: "ProductEntityResponseCollection";
  data: GetProducts_products_data[];
}

export interface GetProducts_periods_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetProducts_periods_data {
  __typename: "PeriodEntity";
  id: string | null;
  attributes: GetProducts_periods_data_attributes | null;
}

export interface GetProducts_periods {
  __typename: "PeriodEntityResponseCollection";
  data: GetProducts_periods_data[];
}

export interface GetProducts {
  products: GetProducts_products | null;
  periods: GetProducts_periods | null;
}
