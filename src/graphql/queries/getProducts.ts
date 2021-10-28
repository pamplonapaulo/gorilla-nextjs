import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      Name
      BaseValue
      Image1 {
        ext
        hash
      }
    }
  }
`

export default GET_PRODUCTS
