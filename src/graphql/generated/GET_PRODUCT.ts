/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT
// ====================================================

export interface GET_PRODUCT_product_data_attributes {
  __typename: "Product";
  Name: string;
  BaseValue: number;
  Weight: number;
  Height: number;
  Width: number;
  Length: number;
}

export interface GET_PRODUCT_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GET_PRODUCT_product_data_attributes | null;
}

export interface GET_PRODUCT_product {
  __typename: "ProductEntityResponse";
  data: GET_PRODUCT_product_data | null;
}

export interface GET_PRODUCT {
  product: GET_PRODUCT_product | null;
}
