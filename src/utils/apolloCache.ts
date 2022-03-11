import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        packs: concatPagination(['where', 'sort']),
        benefits: concatPagination(['where', 'sort']),
      },
    },
  },
})
