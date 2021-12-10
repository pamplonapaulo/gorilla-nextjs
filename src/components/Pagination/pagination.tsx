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

  const handleNavigation = (e: React.MouseEvent<HTMLHeadElement>) => {
    const dir = (e.target as Element).getAttribute('dir')
    if (typeof dir === 'string') moveCarousel(dir)
  }

  useEffect(() => {
    setDots(getPagination())
  }, [getPagination])

  return (
    <>
      <S.Arrow
        onClick={handleNavigation}
        dir={'left'}
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
        onClick={handleNavigation}
        dir={'right'}
        isVisible={nav < length}
      ></S.Arrow>
    </>
  )
}

export default Pagination
