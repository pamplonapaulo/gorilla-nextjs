import { gql } from '@apollo/client'

const GET_FREE_DELIVERY_VALUE = gql`
  query GET_FREE_DELIVERY_VALUE {
    freeDelivery {
      data {
        attributes {
          MinimumTicket
        }
      }
    }
  }
`

export { GET_FREE_DELIVERY_VALUE }
