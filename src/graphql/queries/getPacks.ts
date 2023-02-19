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
                  benefit
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
                  prices {
                    mensal {
                      priceId
                      centavos
                    }
                    trimestral {
                      priceId
                      centavos
                    }
                    semestral {
                      priceId
                      centavos
                    }
                    anual {
                      priceId
                      centavos
                    }
                  }
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
