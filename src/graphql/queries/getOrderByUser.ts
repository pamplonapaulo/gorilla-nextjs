import { gql } from '@apollo/client'

const GET_ORDER_BY_USER = gql`
  query GetOrderByUser($id: IDFilterInput!) {
    orders(filters: { users_permissions_user: { id: $id } }) {
      data {
        id
        attributes {
          createdAt
          Title
          users_permissions_user {
            data {
              id
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

export { GET_ORDER_BY_USER }
