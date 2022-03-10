import { gql } from '@apollo/client'

const GET_BENEFITS = gql`
  query GET_BENEFITS {
    benefits {
      data {
        id
        attributes {
          Benefit
        }
      }
    }
  }
`

export { GET_BENEFITS }
