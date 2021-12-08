import React, { useEffect, useState } from 'react'

import * as S from './styles'

type Page = { packsIDs: string[] }

type Props = {
  getPagination: () => Page[]
}

const Pagination = ({ getPagination }: Props) => {
  const [dots, setDots] = useState<Page[]>([])
  console.log('pagesArr')

  const handlePagination = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.dir((e.target as Element).id)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLHeadElement>) => {
    console.dir((e.target as Element).getAttribute('dir'))
  }

  useEffect(() => {
    console.log('Updating')

    setDots(getPagination())
    console.log(getPagination())
    console.log("Updating pagination's dots")
  }, [getPagination])

  return (
    <>
      <S.Arrow onClick={handleNavigation} dir={'left'}></S.Arrow>
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
      <S.Arrow onClick={handleNavigation} dir={'right'}></S.Arrow>
    </>
  )
}

export default Pagination
