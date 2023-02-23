import { ApolloClient, InMemoryCache } from '@apollo/client'

// export const endpoint = 'http://127.0.0.1:1337/'
// export const endpoint = 'https://gorillapack.fly.dev/'
export const endpoint = `${process.env.NEXT_PUBLIC_BACKEND}`
export const client = new ApolloClient({
  uri: endpoint + 'graphql',
  cache: new InMemoryCache(),
})
