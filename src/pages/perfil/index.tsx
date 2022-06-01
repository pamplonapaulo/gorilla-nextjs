import ProfileTemplate from 'templates/myProfile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'

import { GET_ME } from 'graphql/queries'
import { ME } from 'graphql/generated/ME'

import { User } from 'types/api'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  user: User
}

export default function ProfilePage(props: Props) {
  return <ProfileTemplate user={props.user} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const user = await apolloClient.query<ME>({
    query: GET_ME,
  })

  return {
    props: {
      me: user.data.me,
    },
  }
}
