import HomeTemplate from 'templates/home'
import { initializeApollo } from 'utils/apollo'

import { GET_PACKS } from 'graphql/queries'
import { GetPacks } from 'graphql/generated/GetPacks'

import { GET_BENEFITS } from 'graphql/queries'
import { GetBenefits } from 'graphql/generated/GetBenefits'

export default function Index() {
  return <HomeTemplate />
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query<GetPacks>({
    query: GET_PACKS,
  })

  await apolloClient.query<GetBenefits>({
    query: GET_BENEFITS,
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
