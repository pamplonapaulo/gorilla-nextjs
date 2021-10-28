import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'

const client = new GraphQLClient(endpoint + 'graphql')

export const getImageFile = async (id: number) => {
  const GET_SNACK = gql`
    query GET_SNACK {
      product(id: ${id}) {
        id
        Image1 {
          ext
          hash
        }
      }
    }
  `

  const { product } = await client.request(GET_SNACK)

  console.log(product)

  // return {
  //   props: {
  //     ...product,
  //   },
  // }
  return 'teste'
}
