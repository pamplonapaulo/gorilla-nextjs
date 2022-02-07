import { gql } from '@apollo/client'

const GET_PACKS = gql`
  query GET_PACKS {
    packs {
      data {
        id
        attributes {
          Name
          Description
          ExtraDiscount
          Benefits {
            id
            benefits {
              data {
                id
                attributes {
                  Benefit
                }
              }
            }
          }
          Item {
            id
            Quantity
            product {
              data {
                id
                attributes {
                  Name
                  BaseValue
                }
              }
            }
          }
        }
      }
    }
  }
`

// # packs {
//   #   id
//   #   Name
//   #   Benefits {
//   #     benefit {
//   #       id
//   #       Benefit
//   #     }
//   #   }
//   #   Item {
//   #     id
//   #     Quantity
//   #     product {
//   #       Name
//   #       BaseValue
//   #     }
//   #   }
//   #   Description
//   #   ExtraDiscount
//   # }
export default GET_PACKS
