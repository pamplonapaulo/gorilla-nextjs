import { gql } from '@apollo/client'

const GET_PACKS = gql`
  query GetPacks {
    packs(sort: "id:asc") {
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

export { GET_PACKS }
