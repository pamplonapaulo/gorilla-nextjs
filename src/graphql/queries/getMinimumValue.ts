import { gql } from '@apollo/client'

const GET_MINIMUM_VALUE = gql`
  query GET_MINIMUM_VALUE {
    minimumPackValue {
      data {
        attributes {
          MinimumValue
        }
      }
    }
  }
`

export { GET_MINIMUM_VALUE }
