import MySubscriptionTemplate from 'templates/mySubscription'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ME } from 'graphql/queries'
import { ME } from 'graphql/generated/ME'

import { UserME } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  me: UserME | null
}

export default function MySubscriptionPage(props: Props) {
  const order = props.me?.order.data?.length === 0 ? null : props.me?.order.data

  return <MySubscriptionTemplate {...(props.me && { user: props.me, order })} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  try {
    const user = await apolloClient.query<ME>({
      query: GET_ME,
      variables: {
        isConfirmed: {
          eq: true,
        },
        deactivated: {
          eq: false,
        },
      },
    })

    return {
      props: {
        me: user.data.me,
      },
    }
  } catch {
    return {
      props: {
        me: null,
      },
    }
  }
}
