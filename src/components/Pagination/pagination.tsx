import React, { useEffect, useState } from 'react'

import * as S from './styles'

type Page = { packsIDs: string[] }

type Props = {
  getPagination: () => Page[]
  moveCarousel: (dir: string) => void
  length: number
  nav: number
}

const Pagination = ({ getPagination, moveCarousel, length, nav }: Props) => {
  const [dots, setDots] = useState<Page[]>([])
  console.log('pagesArr')

  const handlePagination = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.dir((e.target as Element).id)
    // moveCarousel()
  }

  const handleNavigation = (e: React.MouseEvent<HTMLHeadElement>) => {
    console.dir((e.target as Element).getAttribute('dir'))
    const dir = (e.target as Element).getAttribute('dir')

    if (typeof dir === 'string') moveCarousel(dir)
  }

  useEffect(() => {
    console.log('Updating')
    setDots(getPagination())
    console.log(getPagination())
    console.log("Updating pagination's dots")
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
          dots.map((p: Page, index) => (
            <S.Dot
              onClick={handlePagination}
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
