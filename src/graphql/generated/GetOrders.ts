/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrders
// ====================================================

export interface GetOrders_orders_data_attributes_period_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetOrders_orders_data_attributes_period_data {
  __typename: "PeriodEntity";
  attributes: GetOrders_orders_data_attributes_period_data_attributes | null;
}

export interface GetOrders_orders_data_attributes_period {
  __typename: "PeriodEntityResponse";
  data: GetOrders_orders_data_attributes_period_data | null;
}

export interface GetOrders_orders_data_attributes_deliveries_expectedArrivalDays {
  __typename: "ComponentOrderExpectedArrivalDays";
  date: any | null;
}

export interface GetOrders_orders_data_attributes_deliveries {
  __typename: "ComponentOrderDelivery";
  fee: string;
  company: string;
  expectedArrivalDays: (GetOrders_orders_data_attributes_deliveries_expectedArrivalDays | null)[];
}

export interface GetOrders_orders_data_attributes_address {
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

export interface GetOrders_orders_data_attributes_expectedPayments {
  __typename: "ComponentOrderExpectedPayments";
  absoluteDiscountApplied: number;
  contentCostBeforeDiscount: number | null;
  finalValueInCentavos: any;
  monthsMultiplier: number | null;
}

export interface GetOrders_orders_data_attributes_snack_product_data_attributes {
  __typename: "Product";
  Name: string;
}

export interface GetOrders_orders_data_attributes_snack_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetOrders_orders_data_attributes_snack_product_data_attributes | null;
}

export interface GetOrders_orders_data_attributes_snack_product {
  __typename: "ProductEntityResponse";
  data: GetOrders_orders_data_attributes_snack_product_data | null;
}

export interface GetOrders_orders_data_attributes_snack {
  __typename: "ComponentPackItem";
  Quantity: number;
  product: GetOrders_orders_data_attributes_snack_product | null;
}

export interface GetOrders_orders_data_attributes {
  __typename: "Order";
  createdAt: any | null;
  Title: string;
  period: GetOrders_orders_data_attributes_period | null;
  deliveries: GetOrders_orders_data_attributes_deliveries;
  address: GetOrders_orders_data_attributes_address | null;
  expectedPayments: GetOrders_orders_data_attributes_expectedPayments | null;
  snack: (GetOrders_orders_data_attributes_snack | null)[];
}

export interface GetOrders_orders_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: GetOrders_orders_data_attributes | null;
}

export interface GetOrders_orders {
  __typename: "OrderEntityResponseCollection";
  data: GetOrders_orders_data[];
}

export interface GetOrders {
  orders: GetOrders_orders | null;
}
