import ProfileTemplate from 'templates/profile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ORDER_BY_USER } from 'graphql/queries'
import { GetOrderByUser } from 'graphql/generated/GetOrderByUser'

import { Order } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type OrderItem = {
  id: string
  attributes: Order
}
type Props = {
  order: OrderItem[]
}

export default function ProfilePage(props: Props) {
  console.log(props)
  return <ProfileTemplate />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetOrderByUser>({
    query: GET_ORDER_BY_USER,
    variables: { id: { eq: session?.id } },
  })

  return {
    props: {
      order: data.orders?.data,
    },
  }
}
