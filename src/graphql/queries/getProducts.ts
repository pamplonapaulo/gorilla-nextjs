import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      data {
        id
        attributes {
          Name
          Image {
            data {
              attributes {
                ext
                url
                hash
              }
            }
          }
          NutritionFacts {
            Portion
            TotalFat
            SaturatedFat
            TransFat
            EnergeticValue
            Carbohydrates
            Sodium
            Proteins
          }
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
    periods {
      data {
        id
        attributes {
          Type
          Multiplier
          Discount
        }
      }
    }
  }
`

export { GET_PRODUCTS }
