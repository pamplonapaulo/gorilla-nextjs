import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  bottom: string
  bottomMobile: string
  topMobile: string
}

const ErrorMessage = ({ children, bottom, bottomMobile, topMobile }: Props) => (
  <>
    <S.Error topMobile={topMobile} bottom={bottom} bottomMobile={bottomMobile}>
      {children}
    </S.Error>
  </>
)

export default ErrorMessage
