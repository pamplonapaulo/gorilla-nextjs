import CheckoutTemplate from 'templates/checkout'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ORDER } from 'graphql/queries'
import { GetOrder } from 'graphql/generated/GetOrder'

import { Order } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  order: Order
}

export default function CheckoutPage(props: Props) {
  console.log(props)
  return <CheckoutTemplate order={props.order} />
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
    query: GET_ORDER,
    variables: { id: context.query.id },
  })
  console.log('data')
  console.log(data)

  return {
    props: {
      order: data.order?.data?.attributes,
    },
  }
}
