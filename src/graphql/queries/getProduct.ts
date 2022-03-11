import { gql } from '@apollo/client'

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
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
