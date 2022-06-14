import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  as?: string
  pathname?: string
  text: string
  height?: string
  dangerMode?: boolean
  noScale?: boolean
  parentCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BtnLittle = ({
  as,
  pathname,
  text,
  height = '70px',
  dangerMode = false,
  noScale,
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
          pathname,
        }}
      >
        <S.Wrap height={height} dangerMode={dangerMode} noScale={noScale}>
          <S.Btn
            {...(parentCallback && { onClick: (e) => handleClick(e) })}
            dangerMode={dangerMode}
          >
            {text}
          </S.Btn>
        </S.Wrap>
      </Link>
    </>
  )
}

export default BtnLittle
