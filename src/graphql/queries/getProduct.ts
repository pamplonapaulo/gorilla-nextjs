import { gql } from '@apollo/client'

/*
const GET_PRODUCT = ($id: number | null) => gql`
  query GET_PRODUCT {
    product(id: $id) {
      data {
        id
        attributes {
          Name
          BaseValue
          Weight
          Height
          Width
          Length
        }
      }
    }
  }
`

export { GET_PRODUCT }
*/

const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          Name
          BaseValue
          Weight
          Height
          Width
          Length
        }
      }
    }
  }
`

export { GET_PRODUCT }
