import { ApolloClient, InMemoryCache } from '@apollo/client'

export const endpoint = process.env.DB_HOST

export const client = new ApolloClient({
  uri: endpoint + 'graphql',
  cache: new InMemoryCache(),
})
