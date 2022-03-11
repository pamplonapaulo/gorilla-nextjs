/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
  Weight: number;
  Height: number;
  Width: number;
  Length: number;
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
