import { useSession } from 'next-auth/client'

import CheckoutTemplate from 'templates/checkout'

export default function Index() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    return <CheckoutTemplate />
  }

  return <h1>Acesso negado: realize o login e tente novamente</h1>
}
