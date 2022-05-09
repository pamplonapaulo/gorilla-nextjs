/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrder
// ====================================================

export interface GetOrder_order_data_attributes_period_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetOrder_order_data_attributes_period_data {
  __typename: "PeriodEntity";
  attributes: GetOrder_order_data_attributes_period_data_attributes | null;
}

export interface GetOrder_order_data_attributes_period {
  __typename: "PeriodEntityResponse";
  data: GetOrder_order_data_attributes_period_data | null;
}

export interface GetOrder_order_data_attributes_deliveries_expectedArrivalDays {
  __typename: "ComponentOrderExpectedArrivalDays";
  date: any | null;
}

export interface GetOrder_order_data_attributes_deliveries {
  __typename: "ComponentOrderDelivery";
  fee: string;
  company: string;
  expectedArrivalDays: (GetOrder_order_data_attributes_deliveries_expectedArrivalDays | null)[];
}

export interface GetOrder_order_data_attributes_address {
  __typename: "ComponentOrderAddress";
  logradouro: string;
  numero: string | null;
  complemento: string | null;
  bairro: string | null;
  municipio: string | null;
  uf: string | null;
  cep: string | null;
  nome: string;
}

export interface GetOrder_order_data_attributes_expectedPayments {
  __typename: "ComponentOrderExpectedPayments";
  absoluteDiscountApplied: number;
  contentCostBeforeDiscount: number | null;
  finalValueInCentavos: any;
  monthsMultiplier: number | null;
}

export interface GetOrder_order_data_attributes_snack_product_data_attributes {
  __typename: "Product";
  Name: string;
}

export interface GetOrder_order_data_attributes_snack_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetOrder_order_data_attributes_snack_product_data_attributes | null;
}

export interface GetOrder_order_data_attributes_snack_product {
  __typename: "ProductEntityResponse";
  data: GetOrder_order_data_attributes_snack_product_data | null;
}

export interface GetOrder_order_data_attributes_snack {
  __typename: "ComponentPackItem";
  Quantity: number;
  product: GetOrder_order_data_attributes_snack_product | null;
}

export interface GetOrder_order_data_attributes {
  __typename: "Order";
  createdAt: any | null;
  Title: string;
  period: GetOrder_order_data_attributes_period | null;
  deliveries: GetOrder_order_data_attributes_deliveries;
  address: GetOrder_order_data_attributes_address | null;
  expectedPayments: GetOrder_order_data_attributes_expectedPayments | null;
  snack: (GetOrder_order_data_attributes_snack | null)[];
}

export interface GetOrder_order_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: GetOrder_order_data_attributes | null;
}

export interface GetOrder_order {
  __typename: "OrderEntityResponse";
  data: GetOrder_order_data | null;
}

export interface GetOrder {
  order: GetOrder_order | null;
}

export interface GetOrderVariables {
  id: string;
}
