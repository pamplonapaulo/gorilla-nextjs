import { useQuery } from '@apollo/client'
import { GET_PACKS } from 'graphql/queries'

import * as S from './styles'
import Carousel from 'components/Carousel'
import DialogBox from 'components/DialogBox'
import BtnArrow from 'components/BtnArrow'
import Loader from 'components/Loader'

const HomeTemplate = () => {
  const { data, loading, error } = useQuery(GET_PACKS)
  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Erro no carregamento dos dados</p>

  return (
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
      <Carousel packs={data.packs?.data} />
    </>
  )
}

export default HomeTemplate
