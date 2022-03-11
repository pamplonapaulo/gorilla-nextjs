import { gql } from '@apollo/client'

const GET_PLANS = gql`
  query GetPlans {
    periods {
      data {
        id
        attributes {
          Type
          Multiplier
          Discount
        }
      }
    }
  }
`

export { GET_PLANS }
