/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IDFilterInput } from "./../../../false";

// ====================================================
// GraphQL query operation: GetOrderByUser
// ====================================================

export interface GetOrderByUser_orders_data_attributes_users_permissions_user_data_attributes {
  __typename: "UsersPermissionsUser";
  phone: string;
  email: string;
  username: string;
}

export interface GetOrderByUser_orders_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: GetOrderByUser_orders_data_attributes_users_permissions_user_data_attributes | null;
}

export interface GetOrderByUser_orders_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: GetOrderByUser_orders_data_attributes_users_permissions_user_data | null;
}

export interface GetOrderByUser_orders_data_attributes_period_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetOrderByUser_orders_data_attributes_period_data {
  __typename: "PeriodEntity";
  attributes: GetOrderByUser_orders_data_attributes_period_data_attributes | null;
}

export interface GetOrderByUser_orders_data_attributes_period {
  __typename: "PeriodEntityResponse";
  data: GetOrderByUser_orders_data_attributes_period_data | null;
}

export interface GetOrderByUser_orders_data_attributes_deliveries_expectedArrivalDays {
  __typename: "ComponentOrderExpectedArrivalDays";
  date: any | null;
}

export interface GetOrderByUser_orders_data_attributes_deliveries {
  __typename: "ComponentOrderDelivery";
  fee: string;
  company: string;
  expectedArrivalDays: (GetOrderByUser_orders_data_attributes_deliveries_expectedArrivalDays | null)[];
}

export interface GetOrderByUser_orders_data_attributes_address {
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

export interface GetOrderByUser_orders_data_attributes_expectedPayments {
  __typename: "ComponentOrderExpectedPayments";
  absoluteDiscountApplied: number;
  contentCostBeforeDiscount: number | null;
  finalValueInCentavos: any;
  monthsMultiplier: number | null;
}

export interface GetOrderByUser_orders_data_attributes_snack_product_data_attributes {
  __typename: "Product";
  Name: string;
}

export interface GetOrderByUser_orders_data_attributes_snack_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetOrderByUser_orders_data_attributes_snack_product_data_attributes | null;
}

export interface GetOrderByUser_orders_data_attributes_snack_product {
  __typename: "ProductEntityResponse";
  data: GetOrderByUser_orders_data_attributes_snack_product_data | null;
}

export interface GetOrderByUser_orders_data_attributes_snack {
  __typename: "ComponentPackItem";
  Quantity: number;
  product: GetOrderByUser_orders_data_attributes_snack_product | null;
}

export interface GetOrderByUser_orders_data_attributes {
  __typename: "Order";
  createdAt: any | null;
  Title: string;
  users_permissions_user: GetOrderByUser_orders_data_attributes_users_permissions_user | null;
  period: GetOrderByUser_orders_data_attributes_period | null;
  deliveries: GetOrderByUser_orders_data_attributes_deliveries;
  address: GetOrderByUser_orders_data_attributes_address | null;
  expectedPayments: GetOrderByUser_orders_data_attributes_expectedPayments | null;
  snack: (GetOrderByUser_orders_data_attributes_snack | null)[];
}

export interface GetOrderByUser_orders_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: GetOrderByUser_orders_data_attributes | null;
}

export interface GetOrderByUser_orders {
  __typename: "OrderEntityResponseCollection";
  data: GetOrderByUser_orders_data[];
}

export interface GetOrderByUser {
  orders: GetOrderByUser_orders | null;
}

export interface GetOrderByUserVariables {
  id: IDFilterInput;
}
