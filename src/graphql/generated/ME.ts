/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ME
// ====================================================

export interface ME_me {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string | null;
  phone: string | null;
  postCode: string | null;
  addressNumber: string | null;
  addressComplement: string | null;
}

export interface ME {
  me: ME_me | null;
}
