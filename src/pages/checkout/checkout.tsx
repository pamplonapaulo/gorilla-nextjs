import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/client'

import { initializeApollo } from 'utils/apollo'
import { GET_ORDER } from 'graphql/queries'
import Loader from 'components/Loader'

import CheckoutTemplate from 'templates/checkout'

import { Order } from 'types/api'

export default function Index() {
  const apolloClient = initializeApollo()

  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setLoading] = useState<null | boolean>(false)

  const fetchData = useCallback(async () => {
    const id = window.location.hash.substring(1)

    const { data } = await apolloClient.query({
      query: GET_ORDER,
      variables: { id },
    })
    setOrder(data.order.data.attributes)
  }, [apolloClient])

  useEffect(() => {
    setLoading(true)
    fetchData().catch(console.error)
    setLoading(false)
  }, [fetchData])

  const [session, loading] = useSession()

  if (loading || isLoading) return <Loader isHidden={false} />

  if (typeof window !== 'undefined' && loading) return null

  if (session && order) {
    return <CheckoutTemplate {...order} />
  }
  return <h1>Acesso negado</h1>
}
