import { gql } from '@apollo/client'

const GET_BENEFITS = gql`
  query GetBenefits {
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
