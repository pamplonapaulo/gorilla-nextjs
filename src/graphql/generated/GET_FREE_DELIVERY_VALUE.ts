/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_FREE_DELIVERY_VALUE
// ====================================================

export interface GET_FREE_DELIVERY_VALUE_freeDelivery_data_attributes {
  __typename: "FreeDelivery";
  MinimumTicket: number | null;
}

export interface GET_FREE_DELIVERY_VALUE_freeDelivery_data {
  __typename: "FreeDeliveryEntity";
  attributes: GET_FREE_DELIVERY_VALUE_freeDelivery_data_attributes | null;
}

export interface GET_FREE_DELIVERY_VALUE_freeDelivery {
  __typename: "FreeDeliveryEntityResponse";
  data: GET_FREE_DELIVERY_VALUE_freeDelivery_data | null;
}

export interface GET_FREE_DELIVERY_VALUE {
  freeDelivery: GET_FREE_DELIVERY_VALUE_freeDelivery | null;
}
