import Custom from 'templates/custom'
import { initializeApollo } from 'utils/apollo'
import { GET_PRODUCTS } from 'graphql/queries'
import { Product, Plans } from 'types/api'

type Props = {
  products: Product[]
  plans: Plans[]
}

export default function Index(props: Props) {
  return <Custom {...props} />
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()
  // const { data } = await apolloClient.query<>({
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS,
  })

  const Props = {
    products: data.products.data,
    plans: data.periods.data,
  }

  return {
    props: {
      ...Props,
    },
  }
}
