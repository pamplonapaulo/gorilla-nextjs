import RegisterTemplate from 'templates/register'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ME } from 'graphql/queries'
import { ME } from 'graphql/generated/ME'

import { UserME } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  me: UserME | null
}

export default function RegisterPage(props: Props) {
  return <RegisterTemplate {...(props.me && { user: props.me })} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=3, stale-while-revalidate=6'
  )

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
