import React from 'react'

import * as S from './styles'

type Props = {
  item: string
  group: string
  parentCallback: (value: number) => void
  discount: number
}

const BtnRadio = ({ item, group, parentCallback, discount }: Props) => (
  <>
    <S.Wrap onClick={() => parentCallback(discount)}>
      <S.Input type={'radio'} id={item} name={group} value={item} />
      <S.Label htmlFor={item}>{item}</S.Label>
      <S.Check></S.Check>
    </S.Wrap>
  </>
)

export default BtnRadio
