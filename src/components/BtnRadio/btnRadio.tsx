import React from 'react'

import * as S from './styles'

type Props = {
  id: number
  item: string
  group: string
  parentCallback: (value: number, id: number) => void
  discount: number
  neverClicked: boolean
}

const BtnRadio = ({
  id,
  item,
  group,
  parentCallback,
  discount,
  neverClicked,
}: Props) => (
  <>
    <S.Wrap onClick={() => parentCallback(discount, id)}>
      <S.Input type={'radio'} id={item} name={group} value={item} />
      <S.Label htmlFor={item} shouldPulse={neverClicked}>
        {item}
      </S.Label>
      <S.Check shouldPulse={neverClicked}></S.Check>
    </S.Wrap>
  </>
)

export default BtnRadio
