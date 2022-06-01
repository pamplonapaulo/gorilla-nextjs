/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BooleanFilterInput, IDFilterInput, ENUM_ORDER_DEACTIVATIONAUTHOR } from "./../../../false";

// ====================================================
// GraphQL query operation: GetActiveOrder
// ====================================================

export interface GetActiveOrder_orders_data_attributes_users_permissions_user_data_attributes {
  __typename: "UsersPermissionsUser";
  phone: string;
  email: string;
  username: string;
}

export interface GetActiveOrder_orders_data_attributes_users_permissions_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: GetActiveOrder_orders_data_attributes_users_permissions_user_data_attributes | null;
}

export interface GetActiveOrder_orders_data_attributes_users_permissions_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: GetActiveOrder_orders_data_attributes_users_permissions_user_data | null;
}

export interface GetActiveOrder_orders_data_attributes_period_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface GetActiveOrder_orders_data_attributes_period_data {
  __typename: "PeriodEntity";
  attributes: GetActiveOrder_orders_data_attributes_period_data_attributes | null;
}

export interface GetActiveOrder_orders_data_attributes_period {
  __typename: "PeriodEntityResponse";
  data: GetActiveOrder_orders_data_attributes_period_data | null;
}

export interface GetActiveOrder_orders_data_attributes_deliveries_expectedArrivalDays {
  __typename: "ComponentOrderExpectedArrivalDays";
  date: any | null;
}

export interface GetActiveOrder_orders_data_attributes_deliveries {
  __typename: "ComponentOrderDelivery";
  fee: string;
  company: string;
  expectedArrivalDays: (GetActiveOrder_orders_data_attributes_deliveries_expectedArrivalDays | null)[];
}

export interface GetActiveOrder_orders_data_attributes_address {
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

export interface GetActiveOrder_orders_data_attributes_expectedPayments {
  __typename: "ComponentOrderExpectedPayments";
  absoluteDiscountApplied: number;
  contentCostBeforeDiscount: number | null;
  finalValueInCentavos: any;
  monthsMultiplier: number | null;
}

export interface GetActiveOrder_orders_data_attributes_snack_product_data_attributes {
  __typename: "Product";
  Name: string;
}

export interface GetActiveOrder_orders_data_attributes_snack_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetActiveOrder_orders_data_attributes_snack_product_data_attributes | null;
}

export interface GetActiveOrder_orders_data_attributes_snack_product {
  __typename: "ProductEntityResponse";
  data: GetActiveOrder_orders_data_attributes_snack_product_data | null;
}

export interface GetActiveOrder_orders_data_attributes_snack {
  __typename: "ComponentPackItem";
  Quantity: number;
  product: GetActiveOrder_orders_data_attributes_snack_product | null;
}

export interface GetActiveOrder_orders_data_attributes {
  __typename: "Order";
  createdAt: any | null;
  Title: string;
  isConfirmed: boolean | null;
  users_permissions_user: GetActiveOrder_orders_data_attributes_users_permissions_user | null;
  deactivated: boolean | null;
  deactivationAuthor: ENUM_ORDER_DEACTIVATIONAUTHOR | null;
  period: GetActiveOrder_orders_data_attributes_period | null;
  deliveries: GetActiveOrder_orders_data_attributes_deliveries;
  address: GetActiveOrder_orders_data_attributes_address | null;
  expectedPayments: GetActiveOrder_orders_data_attributes_expectedPayments | null;
  snack: (GetActiveOrder_orders_data_attributes_snack | null)[];
}

export interface GetActiveOrder_orders_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: GetActiveOrder_orders_data_attributes | null;
}

export interface GetActiveOrder_orders {
  __typename: "OrderEntityResponseCollection";
  data: GetActiveOrder_orders_data[];
}

export interface GetActiveOrder {
  orders: GetActiveOrder_orders | null;
}

export interface GetActiveOrderVariables {
  confirm: BooleanFilterInput;
  id: IDFilterInput;
  deactivated: BooleanFilterInput;
}
