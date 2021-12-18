import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  displayMobile: string
  as?: string
  pathname?: string
  text: string
  onClick?: () => void
}

const Btn = ({ displayMobile, as, pathname, text }: Props) => (
  <>
    <Link
      as={as}
      href={{
        pathname: pathname,
      }}
    >
      <S.Wrap displayMobile={displayMobile}>
        <S.Btn>{text}</S.Btn>
      </S.Wrap>
    </Link>
  </>
)

export default Btn
