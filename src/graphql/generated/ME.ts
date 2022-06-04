/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ORDER_DEACTIVATIONAUTHOR } from "./../../../false";

// ====================================================
// GraphQL query operation: ME
// ====================================================

export interface ME_me_order_data_attributes_deliveries_expectedArrivalDays {
  __typename: "ComponentOrderExpectedArrivalDays";
  date: any | null;
  hasArrived: boolean | null;
}

export interface ME_me_order_data_attributes_deliveries {
  __typename: "ComponentOrderDelivery";
  fee: string;
  company: string;
  expectedArrivalDays: (ME_me_order_data_attributes_deliveries_expectedArrivalDays | null)[];
}

export interface ME_me_order_data_attributes_address {
  __typename: "ComponentOrderAddress";
  nome: string;
  logradouro: string;
  numero: string | null;
  complemento: string | null;
  bairro: string | null;
  municipio: string | null;
  uf: string | null;
  cep: string | null;
}

export interface ME_me_order_data_attributes_expectedPayments {
  __typename: "ComponentOrderExpectedPayments";
  absoluteDiscountApplied: number;
  contentCostBeforeDiscount: number | null;
  finalValueInCentavos: any;
  monthsMultiplier: number | null;
}

export interface ME_me_order_data_attributes_period_data_attributes {
  __typename: "Period";
  Type: string;
  Multiplier: number;
  Discount: number;
}

export interface ME_me_order_data_attributes_period_data {
  __typename: "PeriodEntity";
  attributes: ME_me_order_data_attributes_period_data_attributes | null;
}

export interface ME_me_order_data_attributes_period {
  __typename: "PeriodEntityResponse";
  data: ME_me_order_data_attributes_period_data | null;
}

export interface ME_me_order_data_attributes_snack_product_data_attributes {
  __typename: "Product";
  Name: string;
}

export interface ME_me_order_data_attributes_snack_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: ME_me_order_data_attributes_snack_product_data_attributes | null;
}

export interface ME_me_order_data_attributes_snack_product {
  __typename: "ProductEntityResponse";
  data: ME_me_order_data_attributes_snack_product_data | null;
}

export interface ME_me_order_data_attributes_snack {
  __typename: "ComponentPackItem";
  Quantity: number;
  product: ME_me_order_data_attributes_snack_product | null;
}

export interface ME_me_order_data_attributes {
  __typename: "Order";
  Title: string;
  isConfirmed: boolean | null;
  deactivated: boolean | null;
  deactivationAuthor: ENUM_ORDER_DEACTIVATIONAUTHOR | null;
  createdAt: any | null;
  deliveries: ME_me_order_data_attributes_deliveries;
  address: ME_me_order_data_attributes_address | null;
  expectedPayments: ME_me_order_data_attributes_expectedPayments | null;
  period: ME_me_order_data_attributes_period | null;
  snack: (ME_me_order_data_attributes_snack | null)[];
}

export interface ME_me_order_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: ME_me_order_data_attributes | null;
}

export interface ME_me_order {
  __typename: "OrderRelationResponseCollection";
  data: ME_me_order_data[];
}

export interface ME_me {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string | null;
  phone: string | null;
  postCode: string | null;
  addressNumber: string | null;
  addressComplement: string | null;
  order: ME_me_order | null;
}

export interface ME {
  me: ME_me | null;
}
