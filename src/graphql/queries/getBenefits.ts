import { gql } from '@apollo/client'

const GET_BENEFITS = gql`
  query GET_BENEFITS {
    benefits {
      id
      Benefit
    }
  }
`

export default GET_BENEFITS
