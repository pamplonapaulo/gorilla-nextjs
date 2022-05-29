import ProfileTemplate from 'templates/checkout'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ORDER } from 'graphql/queries'
import { GetOrder } from 'graphql/generated/GetOrder'

import { Order } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  order: Order
}

export default function ProfilePage(props: Props) {
  return <ProfileTemplate order={props.order} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetOrder>({
    query: GET_ORDER,
    variables: { id: context.query.id },
  })

  return {
    props: {
      order: data.order?.data?.attributes,
    },
  }
}
