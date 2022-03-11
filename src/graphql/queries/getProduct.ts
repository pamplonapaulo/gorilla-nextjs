import { gql } from '@apollo/client'

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
