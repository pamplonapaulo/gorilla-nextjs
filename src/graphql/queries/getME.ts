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
    }
  }
`

export { GET_ME }
