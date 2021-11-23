import { ApolloClient, InMemoryCache } from '@apollo/client'

export const endpoint = 'http://127.0.0.1:1337/'
// export const endpoint = 'https://gorillapack-admin.herokuapp.com/'

export const client = new ApolloClient({
  uri: endpoint + 'graphql',
  cache: new InMemoryCache(),
})
