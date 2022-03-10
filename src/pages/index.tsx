import Home from 'templates/home'
import { initializeApollo } from 'utils/apollo'

import { GET_PACKS } from 'graphql/queries'
import { Pack } from 'types/api'

type ComplexPack = {
  packs: Pack[]
}

export default function Index(props: ComplexPack) {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_PACKS,
  })

  const complexPack = {
    packs: data.packs.data,
  }

  return {
    props: {
      revalidate: 60,
      ...complexPack,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
