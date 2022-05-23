import React, { useEffect, useState } from 'react'

import * as S from './styles'

type Props = {
  getPagination: () => number[]
  moveCarousel: (dir: string) => void
  total: number
  length: number
  nav: number
  pageLength: number
}

const Pagination = ({
  getPagination,
  moveCarousel,
  length,
  nav,
  pageLength,
}: Props) => {
  const [dots, setDots] = useState<number[]>([])

  useEffect(() => {
    setDots(getPagination())
  }, [getPagination])

  return (
    <>
      <S.Arrow
        onClick={() => (nav > 0 ? moveCarousel('left') : null)}
        isVisible={nav > 0}
      ></S.Arrow>
      <S.DotsWrap>
        {dots.length > 0 &&
          dots.map((id: number, index) => (
            <S.Dot
              isCurrent={index >= nav && index <= pageLength + nav - 1}
              id={index.toString()}
              key={index}
            ></S.Dot>
          ))}
      </S.DotsWrap>
      <S.Arrow
        onClick={() => (nav < length ? moveCarousel('right') : null)}
        isVisible={nav < length}
      ></S.Arrow>
    </>
  )
}

export default Pagination
