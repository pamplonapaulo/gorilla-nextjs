import { ApolloClient, InMemoryCache } from '@apollo/client'

export const endpoint = `${process.env.NEXT_PUBLIC_BACKEND}`
export const client = new ApolloClient({
  uri: endpoint + 'graphql',
  cache: new InMemoryCache(),
})
