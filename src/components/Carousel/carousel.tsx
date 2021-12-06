import React from 'react'

import * as S from './styles'

import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import BtnLittle from 'components/BtnLittle'

import { Pack } from 'types/api'

type Props = {
  packs: Pack[]
}

const Carousel = ({ packs }: Props) => {
  const handlePagination = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.dir((e.target as Element).id)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLHeadElement>) => {
    console.dir((e.target as Element).getAttribute('dir'))
  }

  return (
    <>
      <S.Wrapper>
        <S.Window>
          {packs.map((p: Pack) => (
            <S.Item key={p.id} className={p.id}>
              <S.H>{p.Name}</S.H>
              <S.Desc>{p.Description}</S.Desc>
              <S.H>R$ {getPackPrice(p)} / mês</S.H>

              <S.Benefits>
                <S.Attribute isChecked={true}>
                  Uso do Selo eureciclo nas embalagens do Selo eureciclo nas
                  embalagens
                </S.Attribute>
                <S.Attribute isChecked={true}>
                  Videos para seu consumidor sobre a parceria seu consumidor
                </S.Attribute>
                <S.Attribute isChecked={true}>
                  Infográfico para divulgar o investimento em reciclagem
                  divulgar o investimento
                </S.Attribute>
                <S.Attribute isChecked={false}>
                  Entrega de informações personalizadas para criação de seus
                  conteúdos
                </S.Attribute>
                <S.Attribute isChecked={false}>
                  Cases de Sucesso no nosso site sobre a parceria site sobre a
                  parceria
                </S.Attribute>
              </S.Benefits>

              <S.FlexCenter>
                <BtnLittle
                  as={`/packs/${replaceSpecialChars(p.Name)}`}
                  pathname={'/packs/[slug]'}
                  text={'Selecionar'}
                />
              </S.FlexCenter>
            </S.Item>
          ))}
        </S.Window>
      </S.Wrapper>
      <S.Wrapper>
        <S.Arrow onClick={handleNavigation} dir={'left'}></S.Arrow>
        <S.DotsWrap>
          {packs.map((p: Pack) => (
            <S.Dot onClick={handlePagination} id={p.id} key={p.id}></S.Dot>
          ))}
        </S.DotsWrap>
        <S.Arrow onClick={handleNavigation} dir={'right'}></S.Arrow>
      </S.Wrapper>
    </>
  )
}

export default Carousel
