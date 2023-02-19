import { gql } from '@apollo/client'

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          Name
          Weight
          Height
          Width
          Length
          prices {
            mensal {
              priceId
              centavos
            }
            trimestral {
              priceId
              centavos
            }
            semestral {
              priceId
              centavos
            }
            anual {
              priceId
              centavos
            }
          }
        }
      }
    }
  }
`

export { GET_PRODUCT }
