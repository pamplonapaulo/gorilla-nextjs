import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  as?: string
  pathname?: string
  text: string
  height?: string
  dangerMode?: boolean
  mobileInheritColor?: boolean
}

const BtnLittle = ({
  as,
  pathname,
  text,
  height = '70px',
  dangerMode = false,
  mobileInheritColor,
}: Props) => (
  <>
    <Link
      as={as}
      href={{
        pathname: pathname,
      }}
    >
      <S.Wrap height={height} dangerMode={dangerMode}>
        <S.Btn mobileInheritColor={mobileInheritColor} dangerMode={dangerMode}>
          {text}
        </S.Btn>
      </S.Wrap>
    </Link>
  </>
)

export default BtnLittle
