import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  console.log('protectedRoutes')
  console.log('context')
  console.log(context)

  if (!session) {
    console.log('!session: ', !session)
    console.log(context)

    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`,
    })
    console.log('context.res')
    console.log(context.res)

    context.res.end()

    // context.res.setHeader(
    //   'Location',
    //   `/sign-in?callbackUrl=${context.resolvedUrl}`
    // )
    // context.res.statusCode = 302
  }

  return session
}

export default protectedRoutes
