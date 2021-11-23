import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'
import axios, { AxiosResponse } from 'axios'
import { endpoint } from 'lib/apollo/client'

import { Snack } from 'types/api'

type Props = {
  pack: Snack[]
  parentCallback: (num: number) => void
}

const DeliveryCalc = ({ pack, parentCallback }: Props) => {
  const [postcode, setPostcode] = useState('')
  const [deliveryCost, setDeliveryCost] = useState(0)

  useEffect(() => {
    if (postcode.length > 8) {
      parentCallback(deliveryCost)
    }
  }, [parentCallback, postcode, deliveryCost])

  useEffect(() => {
    if (postcode.length > 8) {
      const cepWithoutDash = postcode.replace('-', '')
      axios
        .post(endpoint + 'delivery-costs/create-estimation', {
          dropOffPostCode: cepWithoutDash,
          pack: pack,
        })
        .then((response: AxiosResponse<unknown>) => {
          if (typeof response.data === 'number') {
            setDeliveryCost(response.data)
          }
        })
        .catch((error: { response: unknown }) => {
          console.log('we still must format an error display: ', error)
        })
    }
  }, [pack, postcode])

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
        <S.Label isHidden={postcode.length < 9}>Custo de cada frete:</S.Label>
        <S.Cost isHidden={postcode.length < 9}>
          R$ {deliveryCost.toString().replace('.', ',')}
        </S.Cost>
      </S.Wrap>
    </>
  )
}

export default DeliveryCalc
