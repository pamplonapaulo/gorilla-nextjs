import { gql } from '@apollo/client'

const GET_USER_ADDRESS = gql`
  query GetUserAddress($id: ID!) {
    users_permissions_user(id: $id) {
      id
      data {
        attributes {
          postCode
          addressNumber
          addressComplement
        }
      }
    }
  }
`

export { GET_USER_ADDRESS }
