import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'
import axios, { AxiosResponse } from 'axios'
import { endpoint } from 'lib/apollo/client'

import { formatCurrency } from 'utils/formatCurrency'
import { postcodeMask } from 'utils/formValidations'

import { Snack } from 'types/api'

type Props = {
  previouslySavedPostcode: string
  forceReset: boolean
  pack: Snack[]
  parentCallback: (bool: boolean, num: number, cep: string) => void
}

const DeliveryCalc = ({
  previouslySavedPostcode,
  forceReset,
  pack,
  parentCallback,
}: Props) => {
  const [postcode, setPostcode] = useState('')
  const [fullPostcode, setFullPostcode] = useState('')
  const [deliveryFee, setDeliveryFee] = useState<boolean | number>(false)

  useEffect(() => {
    if (previouslySavedPostcode.length === 9) {
      setPostcode(previouslySavedPostcode)
    }
  }, [previouslySavedPostcode])

  useEffect(() => {
    if (forceReset) {
      setPostcode('')
    }
  }, [forceReset])

  useEffect(() => {
    if (postcodeMask(postcode).length > 8) {
      setFullPostcode(postcodeMask(postcode).replace('-', ''))
    }
  }, [postcode])

  useEffect(() => {
    if (fullPostcode != '') {
      interface ServerData {
        quotation: Quotation
        address: Address
      }

      interface Address {
        cep: string
        logradouro: string
        bairro: string
        municipio: string
        uf: string
      }
      interface Quotation {
        fee: number
        expectedTravelingDays: number
        company: string
        packingDetails: PackingDetails[]
      }
      interface PackingDetails {
        format: string
        dimensions: {
          height: number
          width: number
          length: number
        }
        weight: string
        insurance_value: string
        products: PackingDetailsProduct[]
      }

      interface PackingDetailsProduct {
        id: string
        quantity: number
      }

      axios
        .post<ServerData>(endpoint + 'api/delivery', {
          dropOffPostCode: fullPostcode,
          pack: pack,
        })
        .then((response: AxiosResponse<ServerData>) => {
          setDeliveryFee(response.data.quotation.fee)
          parentCallback(true, response.data.quotation.fee, fullPostcode)
        })
        .catch((err: { response: unknown }) => {
          if (err instanceof Error) throw new Error(err.message, { cause: err })
        })
    }
  }, [pack, fullPostcode, parentCallback])

  const handleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(postcodeMask(e.target.value))

    if (postcodeMask(e.target.value).length > 8) {
      setFullPostcode(postcodeMask(e.target.value).replace('-', ''))
    }

    if (postcode.length > 8 && postcodeMask(e.target.value).length < 9) {
      setFullPostcode('')
      setDeliveryFee(false)
      parentCallback(false, 0, fullPostcode)
    }
  }

  return (
    <>
      <S.Wrap>
        <S.Label>
          {previouslySavedPostcode.length === 9
            ? 'CEP previamente cadastrado:'
            : 'Digite o CEP para as entregas:'}
        </S.Label>
        <S.Input
          {...(previouslySavedPostcode.length === 9 && {
            readOnly: true,
          })}
          value={postcode}
          onChange={handleChangePostCode}
        />
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
