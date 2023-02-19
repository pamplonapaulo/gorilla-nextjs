import { gql } from '@apollo/client'

const GET_BENEFITS = gql`
  query GetBenefits {
    benefits {
      data {
        id
        attributes {
          benefit
        }
      }
    }
  }
`

export { GET_BENEFITS }
