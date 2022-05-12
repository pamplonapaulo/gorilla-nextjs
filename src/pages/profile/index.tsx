import ProfileTemplate from 'templates/profile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ORDERS } from 'graphql/queries'
import { GetOrder } from 'graphql/generated/GetOrder'

import { GetServerSideProps, GetServerSidePropsContext } from 'next'

// type Props = {
//   order: Order
// }

export default function ProfilePage(props: unknown) {
  console.log(props)
  return <ProfileTemplate />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log('getServerSideProps context')
  console.log(context.res)

  const session = await protectedRoutes(context)
  console.log('session')
  console.log(session)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetOrder>({
    query: GET_ORDERS,
  })
  console.log('data')
  console.log(data)

  return {
    props: {
      order: data,
    },
  }
}
