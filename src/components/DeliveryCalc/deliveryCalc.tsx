import React, { useState } from 'react'
import * as S from './styles'

const DeliveryCalc = () => {
  const [postcode, setPostcode] = useState('')

  const postCodeMask = (value: string) =>
    value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')

  const handleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPostcode(postCodeMask(e.target.value))

  return (
    <>
      <S.Wrap>
        <S.Label>Digite o CEP para as entregas:</S.Label>
        <S.Input value={postcode} onChange={handleChangePostCode} />
        <S.Label>Custo de cada entrega:</S.Label>
        <S.Cost>R$ 66,33</S.Cost>
      </S.Wrap>
    </>
  )
}

export default DeliveryCalc
