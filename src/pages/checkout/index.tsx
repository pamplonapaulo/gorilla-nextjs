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
  console.log(' ')
  console.log('props:')
  console.log(props)
  console.log(' ')
  console.log('props.order:')
  console.log(props.order)

  return <CheckoutTemplate order={props.order} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.name

  console.log('order id:', id)

  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetOrder>({
    query: GET_ORDER,
    variables: { id },
  })

  console.log('order object:')
  console.log(data)

  console.log('data.order?.data?.attributes:')
  console.log(data.order?.data?.attributes)

  return {
    props: {
      order: data.order?.data?.attributes,
    },
  }
}
