import { gql } from '@apollo/client'

const GET_PLANS = gql`
  query GET_PLANS {
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

export default GET_PLANS
