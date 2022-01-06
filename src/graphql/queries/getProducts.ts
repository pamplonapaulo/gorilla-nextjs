import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      Name
      BaseValue
      Image1 {
        ext
        hash
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
`

export default GET_PRODUCTS
