import React, { useState, useEffect } from 'react'

import * as S from './styles'

type Props = {
  idOfSnack: number
  photoOfSnack: string
  parentCallback: (
    idOfSnack: number,
    total: number,
    shouldIncrement: boolean,
    photoOfSnack: string
  ) => void
  scale: string
  value: number
}

const Input = ({
  idOfSnack,
  photoOfSnack,
  parentCallback,
  scale,
  value,
}: Props) => {
  const [quantity, setQuantity] = useState(value)

  useEffect(() => {
    setQuantity(value)
  }, [value, setQuantity])

  const changeQuantity = (value: string) => {
    if (value === '-' && quantity > 0) {
      parentCallback(idOfSnack, quantity, false, photoOfSnack)
      setQuantity(quantity - 1)
    } else if (value === '+') {
      parentCallback(idOfSnack, quantity, true, photoOfSnack)
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <S.Container theme={{ size: scale }}>
        <S.Btn onClick={() => changeQuantity('-')}>{'-'}</S.Btn>
        <S.FakeInput>
          <S.P>{quantity}</S.P>
        </S.FakeInput>
        <S.Btn onClick={() => changeQuantity('+')}>{'+'}</S.Btn>
        <S.HiddenInput defaultValue={quantity} type="number" min="0" />
      </S.Container>
    </>
  )
}

export default Input
