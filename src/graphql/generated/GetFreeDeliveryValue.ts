/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFreeDeliveryValue
// ====================================================

export interface GetFreeDeliveryValue_freeDelivery_data_attributes {
  __typename: "FreeDelivery";
  MinimumTicket: number | null;
}

export interface GetFreeDeliveryValue_freeDelivery_data {
  __typename: "FreeDeliveryEntity";
  attributes: GetFreeDeliveryValue_freeDelivery_data_attributes | null;
}

export interface GetFreeDeliveryValue_freeDelivery {
  __typename: "FreeDeliveryEntityResponse";
  data: GetFreeDeliveryValue_freeDelivery_data | null;
}

export interface GetFreeDeliveryValue {
  freeDelivery: GetFreeDeliveryValue_freeDelivery | null;
}
