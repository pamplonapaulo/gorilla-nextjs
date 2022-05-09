import { gql } from '@apollo/client'

const GET_ORDER = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      data {
        id
        attributes {
          createdAt
          Title
          users_permissions_user {
            data {
              attributes {
                phone
                email
                username
              }
            }
          }
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

export { GET_ORDER }
