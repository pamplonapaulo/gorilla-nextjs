import React, { useLayoutEffect, useCallback, useState, useRef } from 'react'

import * as S from './styles'

import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import BtnLittle from 'components/BtnLittle'
import Pagination from 'components/Pagination'

import { Pack, Benefit } from 'types/api'

import { sortBenefitsById } from 'utils/sortBenefitsById'

type Props = {
  packs: Pack[]
}

const Carousel = ({ packs }: Props) => {
  const [pageLength, setPageLength] = useState(1)
  const [nav, setNav] = useState(0)
  const [translate, setTranslate] = useState<number>(0)
  const refItem = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
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
  })

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

  return (
    <>
      <S.Wrapper>
        <S.Window moving={translate}>
          {packs.map((p: Pack) => {
            return (
              <S.Item key={p.id} className={p.id} ref={refItem}>
                <S.H>{p.Name}</S.H>
                <S.Desc>{p.Description}</S.Desc>
                <S.H>R$ {getPackPrice(p)} / mês</S.H>

                <S.Benefits>
                  {sortBenefitsById(p.Benefits).map((b: Benefit) => (
                    <S.Attribute key={b.benefit.id} isChecked={b.CurrentStatus}>
                      {b.benefit.Benefit}
                    </S.Attribute>
                  ))}
                </S.Benefits>

                <S.FlexCenter>
                  <BtnLittle
                    as={`/packs/${replaceSpecialChars(p.Name)}`}
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
