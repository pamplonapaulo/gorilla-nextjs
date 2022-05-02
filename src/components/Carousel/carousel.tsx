import React, { useEffect, useCallback, useState, useRef } from 'react'

import { useQuery } from '@apollo/client'
import { GET_BENEFITS } from 'graphql/queries'
import Loader from 'components/Loader'

import * as S from './styles'

import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import Benefits from 'components/Benefits'
import BtnLittle from 'components/BtnLittle'
import Pagination from 'components/Pagination'

import { Pack } from 'types/api'

type Props = {
  packs: Pack[]
}

const Carousel = ({ packs }: Props) => {
  const [pageLength, setPageLength] = useState(1)
  const [nav, setNav] = useState(0)
  const [translate, setTranslate] = useState<number>(0)
  const refItem = useRef<HTMLDivElement>(null)

  const { loading, error, data } = useQuery(GET_BENEFITS)

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) setPageLength(1)
      if (window.innerWidth < 1024 && window.innerWidth >= 480) setPageLength(2)
      if (window.innerWidth < 1260 && window.innerWidth >= 1024)
        setPageLength(3)
      if (window.innerWidth >= 1260) setPageLength(4)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const moveCarousel = (dir: string | null) => {
    const el: HTMLDivElement | null = refItem.current
    let width: number | null = null
    if (el !== null) {
      width = el.offsetWidth
    }

    if (dir === 'left' && typeof width === 'number' && nav > 0) {
      setNav(nav - 1)
      setTranslate(translate + width)
    }

    if (
      dir === 'right' &&
      typeof width === 'number' &&
      nav < packs.length - pageLength
    ) {
      setNav(nav + 1)
      setTranslate(translate - width)
    }
  }

  const getPagination = useCallback(() => {
    const pagination: number[] = []

    for (let i = 0; i < packs.length; i++) {
      pagination.push(parseInt(packs[i].id))
    }
    return pagination
  }, [packs])

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Erro no carregamento dos BENEFÍCIOS</p>

  return (
    <>
      <S.Wrapper>
        <S.Window moving={translate}>
          {packs.map((p: Pack) => {
            return (
              <S.Item key={p.id} className={p.id} ref={refItem}>
                <S.H>{p.attributes.Name}</S.H>
                <S.Desc>{p.attributes.Description}</S.Desc>
                <S.H>R$ {getPackPrice(p)} / mês</S.H>
                <Benefits
                  packBenefits={p.attributes.Benefits[0].benefits.data}
                  generalBenefits={data.benefits.data}
                  isHome={true}
                />
                <S.FlexCenter>
                  <BtnLittle
                    as={`/packs/${
                      p.id + '-' + replaceSpecialChars(p.attributes.Name)
                    }`}
                    pathname={'/packs/[slug]'}
                    text={'Selecionar'}
                  />
                </S.FlexCenter>
              </S.Item>
            )
          })}
        </S.Window>
      </S.Wrapper>
      <S.Wrapper>
        <Pagination
          getPagination={getPagination}
          moveCarousel={moveCarousel}
          total={packs.length}
          length={packs.length - pageLength}
          nav={nav}
          pageLength={pageLength}
        />
      </S.Wrapper>
    </>
  )
}

export default Carousel
