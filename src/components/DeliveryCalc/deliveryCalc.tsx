import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'
import axios, { AxiosResponse } from 'axios'
import { endpoint } from 'lib/apollo/client'

import { formatCurrency } from 'utils/formatCurrency'

import { Snack } from 'types/api'

type Props = {
  forceReset: boolean
  pack: Snack[]
  parentCallback: (bool: boolean, num: number) => void
}

const DeliveryCalc = ({ forceReset, pack, parentCallback }: Props) => {
  const [postcode, setPostcode] = useState('')
  const [fullPostcode, setFullPostcode] = useState('')
  const [deliveryFee, setDeliveryFee] = useState<boolean | number>(false)

  useEffect(() => {
    if (forceReset) {
      console.log('forceReset: ', forceReset)
      setPostcode('')
      // setFullPostcode('')
    }
  }, [forceReset])

  useEffect(() => {
    if (fullPostcode != '') {
      axios
        .post(endpoint + 'api/deliveryFee', {
          dropOffPostCode: fullPostcode,
          pack: pack,
        })
        .then((response: AxiosResponse<unknown>) => {
          if (typeof response.data === 'number') {
            setDeliveryFee(response.data)
            parentCallback(true, response.data)
          }
        })
        .catch((error: { response: unknown }) => {
          console.log('we still must format an error display: ', error)
        })
    }
  }, [pack, fullPostcode, parentCallback])

  const postCodeMask = (value: string) =>
    value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')

  const handleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(postCodeMask(e.target.value))

    if (postCodeMask(e.target.value).length > 8) {
      setFullPostcode(postCodeMask(e.target.value).replace('-', ''))
    }

    if (postcode.length > 8 && postCodeMask(e.target.value).length < 9) {
      setFullPostcode('')
      setDeliveryFee(false)
      parentCallback(false, 0)
    }
  }

  return (
    <>
      <S.Wrap>
        <S.Label>Digite o CEP para as entregas:</S.Label>
        <S.Input value={postcode} onChange={handleChangePostCode} />
        <S.Label isHidden={typeof deliveryFee === 'boolean'}>
          Custo de cada frete:
        </S.Label>
        <S.Fee isHidden={typeof deliveryFee === 'boolean'}>
          {typeof deliveryFee === 'number' &&
            deliveryFee !== 0 &&
            'R$ ' + formatCurrency(deliveryFee)}
          {deliveryFee === 0 && 'GRÁTIS'}
          {deliveryFee === false && 'is hidden'}
        </S.Fee>
      </S.Wrap>
    </>
  )
}

export default DeliveryCalc
