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
                username
                email
                phone
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

/*
import { gql } from '@apollo/client'

const GET_ORDER = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
              attributes {
                username
                email
                phone
              }
            }
          }
          coupon {
            data {
              attributes {
                type
                discount
              }
            }
          }
        }
      }
    }
  }
`

export { GET_ORDER }*/
