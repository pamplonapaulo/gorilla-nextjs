/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_data_attributes_prices_mensal {
  __typename: "ComponentPricesMensal";
  priceId: string;
  centavos: any;
}

export interface GetProduct_product_data_attributes_prices_trimestral {
  __typename: "ComponentPricesTrimestral";
  priceId: string;
  centavos: any;
}

export interface GetProduct_product_data_attributes_prices_semestral {
  __typename: "ComponentPricesSemestral";
  priceId: string;
  centavos: any;
}

export interface GetProduct_product_data_attributes_prices_anual {
  __typename: "ComponentPricesAnual";
  priceId: string;
  centavos: any;
}

export interface GetProduct_product_data_attributes_prices {
  __typename: "ComponentPricePrices";
  mensal: GetProduct_product_data_attributes_prices_mensal;
  trimestral: GetProduct_product_data_attributes_prices_trimestral;
  semestral: GetProduct_product_data_attributes_prices_semestral;
  anual: GetProduct_product_data_attributes_prices_anual;
}

export interface GetProduct_product_data_attributes {
  __typename: "Product";
  Name: string;
  Weight: number | null;
  Height: number | null;
  Width: number | null;
  Length: number | null;
  prices: GetProduct_product_data_attributes_prices;
}

export interface GetProduct_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetProduct_product_data_attributes | null;
}

export interface GetProduct_product {
  __typename: "ProductEntityResponse";
  data: GetProduct_product_data | null;
}

export interface GetProduct {
  product: GetProduct_product | null;
}

export interface GetProductVariables {
  id: string;
}
