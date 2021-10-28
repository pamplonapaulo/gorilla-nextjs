import React from 'react'

import * as S from './styles'

type Props = {
  item: string
  group: string
}

const BtnRadio = ({ item, group }: Props) => (
  <>
    <S.Wrap>
      <S.Input type={'radio'} id={item} name={group} value={item} />
      <S.Label htmlFor={item}>{item}</S.Label>
      <S.Check></S.Check>
    </S.Wrap>
  </>
)

export default BtnRadio
