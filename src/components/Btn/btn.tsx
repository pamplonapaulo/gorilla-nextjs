import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  as?: string
  children?: React.ReactNode
  displayMobile?: string
  isDisable?: boolean
  parentCallback?: () => void
  pathname?: string
  text?: string
}

const Btn = ({
  as,
  children,
  displayMobile = 'none',
  isDisable = false,
  parentCallback,
  pathname,
  text,
}: Props) => {
  if (parentCallback && !as && !pathname) {
    return (
      <div onClick={parentCallback}>
        <S.Wrap displayMobile={displayMobile}>
          <S.Btn isDisable={isDisable}>{children ? children : text}</S.Btn>
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
          <S.Btn isDisable={isDisable}>{children ? children : text}</S.Btn>
        </S.Wrap>
      </Link>
    )
  }
}

export default Btn
