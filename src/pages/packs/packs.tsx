import { useQuery } from '@apollo/client'
import GET_PACKS from 'graphql/queries/getPacks'

import { Pack } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Loader from 'components/Loader'
import Btn from 'components/Btn'

import * as S from './styles'

const Packs = () => {
  const { loading, error, data } = useQuery(GET_PACKS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <>
      <S.Container>
        <S.T>{'Selecione o seu pack'}</S.T>
        <S.Wrapper>
          {data.packs.map((p: Pack) => (
            <S.Item key={p.id}>
              <S.H>{p.Name}</S.H>
              <S.ImgWrap>
                <S.ImgComp
                  src={'https://via.placeholder.com/500.png/'}
                  alt={getImageUrl(
                    '/uploads/' + p.Image['hash'] + p.Image['ext']
                  )}
                  // alt={p.Name}
                />
              </S.ImgWrap>
              <S.H>R$ {getPackPrice(p)} / mês</S.H>
              <S.FlexCenter>
                <Btn
                  as={`/packs/${replaceSpecialChars(p.Name)}`}
                  pathname={'/packs/[slug]'}
                  text={'Assinar'}
                />
              </S.FlexCenter>
            </S.Item>
          ))}
          <S.Item>
            <S.H>{''}</S.H>
            <S.ImgWrap>
              <S.ImgComp
                src={'https://via.placeholder.com/500.png/'}
                // src={getImageUrl('/uploads/custom_a407b5b52e.png')}
                alt={'custom'}
              />
            </S.ImgWrap>
            <S.H>{'.'}</S.H>
            <S.FlexCenter>
              <Btn
                as={'/packs/custom'}
                pathname={'/packs/custom'}
                text={'Customizar'}
              />
            </S.FlexCenter>
          </S.Item>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Packs
