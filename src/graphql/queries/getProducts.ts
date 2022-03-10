import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      data {
        id
        attributes {
          Name
          BaseValue
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
