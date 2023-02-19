/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPacks
// ====================================================

export interface GetPacks_packs_data_attributes_Benefits_benefits_data_attributes {
  __typename: "Benefit";
  benefit: string;
}

export interface GetPacks_packs_data_attributes_Benefits_benefits_data {
  __typename: "BenefitEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes_Benefits_benefits_data_attributes | null;
}

export interface GetPacks_packs_data_attributes_Benefits_benefits {
  __typename: "BenefitRelationResponseCollection";
  data: GetPacks_packs_data_attributes_Benefits_benefits_data[];
}

export interface GetPacks_packs_data_attributes_Benefits {
  __typename: "ComponentPackBenefits";
  id: string;
  benefits: GetPacks_packs_data_attributes_Benefits_benefits | null;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes_prices_mensal {
  __typename: "ComponentPricesMensal";
  priceId: string;
  centavos: any;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes_prices_trimestral {
  __typename: "ComponentPricesTrimestral";
  priceId: string;
  centavos: any;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes_prices_semestral {
  __typename: "ComponentPricesSemestral";
  priceId: string;
  centavos: any;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes_prices_anual {
  __typename: "ComponentPricesAnual";
  priceId: string;
  centavos: any;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes_prices {
  __typename: "ComponentPricePrices";
  mensal: GetPacks_packs_data_attributes_Item_product_data_attributes_prices_mensal;
  trimestral: GetPacks_packs_data_attributes_Item_product_data_attributes_prices_trimestral;
  semestral: GetPacks_packs_data_attributes_Item_product_data_attributes_prices_semestral;
  anual: GetPacks_packs_data_attributes_Item_product_data_attributes_prices_anual;
}

export interface GetPacks_packs_data_attributes_Item_product_data_attributes {
  __typename: "Product";
  Name: string;
  prices: GetPacks_packs_data_attributes_Item_product_data_attributes_prices;
}

export interface GetPacks_packs_data_attributes_Item_product_data {
  __typename: "ProductEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes_Item_product_data_attributes | null;
}

export interface GetPacks_packs_data_attributes_Item_product {
  __typename: "ProductEntityResponse";
  data: GetPacks_packs_data_attributes_Item_product_data | null;
}

export interface GetPacks_packs_data_attributes_Item {
  __typename: "ComponentPackItem";
  id: string;
  Quantity: number;
  product: GetPacks_packs_data_attributes_Item_product | null;
}

export interface GetPacks_packs_data_attributes {
  __typename: "Pack";
  Name: string;
  Description: string | null;
  ExtraDiscount: number | null;
  Benefits: GetPacks_packs_data_attributes_Benefits[];
  Item: (GetPacks_packs_data_attributes_Item | null)[];
}

export interface GetPacks_packs_data {
  __typename: "PackEntity";
  id: string | null;
  attributes: GetPacks_packs_data_attributes | null;
}

export interface GetPacks_packs {
  __typename: "PackEntityResponseCollection";
  data: GetPacks_packs_data[];
}

export interface GetPacks {
  packs: GetPacks_packs | null;
}
