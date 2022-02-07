import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  displayMobile: string
  as?: string
  pathname?: string
  text: string
  parentCallback?: () => void
}

const Btn = ({ displayMobile, as, pathname, text, parentCallback }: Props) => {
  if (parentCallback && !as && !pathname) {
    return (
      <div onClick={parentCallback}>
        <S.Wrap displayMobile={displayMobile}>
          <S.Btn>{text}</S.Btn>
        </S.Wrap>
      </div>
    )
  } else {
    return (
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
    )
  }
}

export default Btn
