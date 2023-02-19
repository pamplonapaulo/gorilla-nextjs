import { gql } from '@apollo/client'

const GET_ME = gql`
  query ME(
    $isConfirmed: BooleanFilterInput!
    $deactivated: BooleanFilterInput!
  ) {
    me {
      id
      confirmed
      blocked
      username
      email
      phone
      postCode
      stripe_customer
      addressNumber
      addressComplement
      order(filters: { isConfirmed: $isConfirmed, deactivated: $deactivated }) {
        data {
          id
          attributes {
            title
            isConfirmed
            deactivated
            deactivationAuthor
            createdAt
            deliveries {
              fee
              company
              expectedArrivalDays(pagination: { limit: 12 }) {
                date
                hasArrived
              }
            }
            address {
              nome
              logradouro
              numero
              complemento
              bairro
              municipio
              uf
              cep
            }
            expectedPayments {
              absoluteDiscountApplied
              contentCostBeforeDiscount
              finalValue
              monthsMultiplier
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
            paymentIntent
          }
        }
      }
    }
  }
`

export { GET_ME }
