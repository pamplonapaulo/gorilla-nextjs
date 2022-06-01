import MySubscriptionTemplate from 'templates/mySubscription'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ACTIVE_ORDER, GET_ME } from 'graphql/queries'
import { GetActiveOrder } from 'graphql/generated/GetActiveOrder'
import { ME } from 'graphql/generated/ME'

import { Order, User } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type OrderItem = {
  id: string
  attributes: Order
}
type Props = {
  order: OrderItem[]
  me: User
}

export default function MySubscriptionPage(props: Props) {
  console.log(props)
  return (
    <MySubscriptionTemplate order={props.order[0].attributes} user={props.me} />
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetActiveOrder>({
    query: GET_ACTIVE_ORDER,
    variables: {
      confirm: { eq: true },
      id: { eq: session?.id },
      deactivated: { eq: false },
    },
  })

  const user = await apolloClient.query<ME>({
    query: GET_ME,
  })

  return {
    props: {
      order: data.orders?.data,
      me: user.data.me,
    },
  }
}
