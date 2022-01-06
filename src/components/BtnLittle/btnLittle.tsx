import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  as?: string
  pathname?: string
  text: string
}

const BtnLittle = ({ as, pathname, text }: Props) => (
  <>
    <Link
      as={as}
      href={{
        pathname: pathname,
      }}
    >
      <S.Wrap>
        <S.Btn>{text}</S.Btn>
      </S.Wrap>
    </Link>
  </>
)

export default BtnLittle
