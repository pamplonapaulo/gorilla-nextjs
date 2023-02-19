import { gql } from '@apollo/client'

const GET_SLUG = gql`
  query GetSlug($id: ID!) {
    pack(id: $id) {
      data {
        id
        attributes {
          Name
          Description
          ExtraDiscount
          Benefits {
            id
            benefits {
              data {
                id
                attributes {
                  benefit
                }
              }
            }
          }
          Item {
            id
            Quantity
            product {
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
                }
              }
            }
          }
        }
      }
    }
  }
`

export { GET_SLUG }
