import CustomTemplate from 'templates/custom'
import { initializeApollo } from 'utils/apollo'
import { GET_PRODUCTS } from 'graphql/queries'
import { GetProducts } from 'graphql/generated/GetProducts'

import { Product, Plans } from 'types/api'
import { GetServerSideProps } from 'next'

type Props = {
  products: Product[]
  plans: Plans[]
}

export default function CustomPackPage(props: Props) {
  console.log(' ')
  console.log(props)
  console.log(' ')

  return <CustomTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetProducts>({
    query: GET_PRODUCTS,
  })

  return {
    props: {
      products: data.products?.data,
      plans: data.periods?.data,
    },
  }
}
