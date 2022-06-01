import CheckoutTemplate from 'templates/checkout'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ORDER, GET_ME } from 'graphql/queries'
import { GetOrder } from 'graphql/generated/GetOrder'
import { ME } from 'graphql/generated/ME'

import { Order, User } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  order: Order
  me: User
}

export default function CheckoutPage(props: Props) {
  return <CheckoutTemplate order={props.order} user={props.me} />
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

  const user = await apolloClient.query<ME>({
    query: GET_ME,
  })

  return {
    props: {
      order: data.order?.data?.attributes,
      me: user.data.me,
    },
  }
}
