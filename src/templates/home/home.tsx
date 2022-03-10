import * as S from './styles'
import { Pack } from 'types/api'
import Carousel from 'components/Carousel'
import DialogBox from 'components/DialogBox'
import BtnArrow from 'components/BtnArrow'

type ComplexPack = {
  packs: Pack[]
}

const Home = ({ packs }: ComplexPack) => (
  <>
    <DialogBox />
    <S.FlexCenter>
      <S.T>{'Qual o melhor pack para você?'}</S.T>
      <BtnArrow
        as={'/packs/custom'}
        pathname={'/packs/custom'}
        text={'Customizar'}
      />
    </S.FlexCenter>
    <Carousel packs={packs} />
  </>
)

export default Home

/*
import { useQuery } from '@apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import Loader from 'components/Loader'
import Carousel from 'components/Carousel'
import BtnArrow from 'components/BtnArrow'
import DialogBox from 'components/DialogBox'

import styled from 'styled-components'
import { initializeApollo } from 'utils/apollo'

import { Pack } from 'types/api'

type ComplexPack = {
  packs: Pack[]
}

export default function Home({ ...complexPack }: ComplexPack) {
  // const Home = ({ ...complexPack }: ComplexPack) => {
  // const { loading, error, data } = useQuery(GET_PACKS)
  // if (loading) return <Loader isHidden={false} />
  // if (error) return <p>Erro 2 no carregamento dos packs do Gorilla</p>

  console.log('complexPack')
  console.log(complexPack)

  return (
    <>
      {/* <DialogBox /> *}
      <FlexCenter>
        <T>{'Qual o melhor pack para você?'}</T>
        <BtnArrow
          as={'/packs/custom'}
          pathname={'/packs/custom'}
          text={'Customizar'}
        />
        {/* {complexPack.packs.map((p: Pack) => (
          <p key={p.id}>{p.attributes.Name}</p>
        ))} *}
      </FlexCenter>
      <Carousel packs={complexPack.packs} />
    </>
  )
}


export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  // const { data } = await apolloClient.query<>({
  const { data } = await apolloClient.query({
    query: GET_PACKS,
  })

  const complexPack = {
    packs: data.packs.data,
  }

  return {
    props: {
      ...complexPack,
    },
  }
}
// export default Home

*/
