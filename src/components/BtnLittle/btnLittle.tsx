import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  as?: string
  pathname?: string
  text: string
  height?: string
  dangerMode?: boolean
  parentCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BtnLittle = ({
  as,
  pathname,
  text,
  height = '70px',
  dangerMode = false,
  parentCallback,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (parentCallback) {
      parentCallback(e)
    }
  }

  return (
    <>
      <Link
        as={as}
        href={{
          pathname: pathname,
        }}
      >
        <S.Wrap height={height} dangerMode={dangerMode}>
          {!parentCallback && <S.Btn dangerMode={dangerMode}>{text}</S.Btn>}
          {parentCallback && (
            <S.Btn dangerMode={dangerMode} onClick={(e) => handleClick(e)}>
              {text}
            </S.Btn>
          )}
        </S.Wrap>
      </Link>
    </>
  )
}

export default BtnLittle
