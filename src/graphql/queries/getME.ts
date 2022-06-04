import { gql } from '@apollo/client'

const GET_ME = gql`
  query ME {
    me {
      id
      username
      email
      phone
      postCode
      addressNumber
      addressComplement
      order {
        data {
          id
          attributes {
            Title
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
              finalValueInCentavos
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
          }
        }
      }
    }
  }
`

export { GET_ME }
