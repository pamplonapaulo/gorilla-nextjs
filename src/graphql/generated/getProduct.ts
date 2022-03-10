/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProduct
// ====================================================

export interface getProduct_product_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
  Weight: number;
  Height: number;
  Width: number;
  Length: number;
}

export interface getProduct_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: getProduct_product_data_attributes | null;
}

export interface getProduct_product {
  __typename: "ProductEntityResponse";
  data: getProduct_product_data | null;
}

export interface getProduct {
  product: getProduct_product | null;
}

export interface getProductVariables {
  id: string;
}
