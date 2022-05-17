import { gql } from '@apollo/client'

const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder(
    $confirm: BooleanFilterInput!
    $id: IDFilterInput!
    $deactivated: BooleanFilterInput!
  ) {
    orders(
      filters: {
        isConfirmed: $confirm
        users_permissions_user: { id: $id }
        deactivated: $deactivated
      }
    ) {
      data {
        id
        attributes {
          createdAt
          Title
          isConfirmed
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
          deactivated
          deactivationAuthor
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

export { GET_ACTIVE_ORDER }
