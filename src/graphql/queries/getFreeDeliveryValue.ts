import { gql } from '@apollo/client'

const GET_FREE_DELIVERY_VALUE = gql`
  query GetFreeDeliveryValue {
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
