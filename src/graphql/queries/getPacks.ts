import { gql } from '@apollo/client'

const GET_PACKS = gql`
  query GET_PACKS {
    packs {
      id
      Name
      Item {
        id
        Quantity
        product {
          Name
          BaseValue
        }
      }
      Description
      ExtraDiscount
    }
  }
`

export default GET_PACKS
