import { gql } from '@apollo/client'

const GET_ORDERS = gql`
  query GetOrders {
    orders {
      data {
        id
        attributes {
          createdAt
          Title
          period {
            data {
              attributes {
                Type
                Multiplier
                Discount
              }
            }
          }
          deliveries {
            fee
            company
            expectedArrivalDays {
              date
            }
          }
          address {
            logradouro
            numero
            complemento
            bairro
            municipio
            uf
            cep
            nome
          }
          expectedPayments {
            absoluteDiscountApplied
            contentCostBeforeDiscount
            finalValueInCentavos
            monthsMultiplier
          }
          snack {
            Quantity
            product {
              data {
                id
                attributes {
                  Name
                }
              }
            }
          }
        }
      }
    }
  }
`

export { GET_ORDERS }
