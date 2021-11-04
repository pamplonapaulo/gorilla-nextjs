import { gql } from '@apollo/client'

const GET_PLANS = gql`
  query GET_PLANS {
    periodicidades {
      id
      Type
      Multiplier
      Discount
    }
  }
`

export default GET_PLANS
