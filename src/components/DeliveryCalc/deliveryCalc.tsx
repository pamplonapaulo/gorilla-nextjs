import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'
import axios, { AxiosResponse } from 'axios'
import { endpoint } from 'lib/apollo/client'

import { formatCurrency } from 'utils/formatCurrency'

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
      console.log('forceReset: ', forceReset)
      setPostcode('')
      // setFullPostcode('')
    }
  }, [forceReset])

  useEffect(() => {
    console.log('deliveryCal postcode state: ', postcode)

    if (postCodeMask(postcode).length > 8) {
      setFullPostcode(postCodeMask(postcode).replace('-', ''))
    }

    return () => {
      // Component PackPanel did unmount
      console.log('popopopopopopopop')
    }
  }, [postcode])

  useEffect(() => {
    console.log(`fullPostcode`)
    console.log(fullPostcode)

    if (fullPostcode != '') {
      console.log('inside')
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
          console.log('then...')
          console.log(response)
          if (response?.data?.quotation) {
            console.log('setting delivery fee....')
            setDeliveryFee(response.data.quotation.fee)
            parentCallback(true, response.data.quotation.fee, fullPostcode)
          }
        })
        .catch((error: { response: unknown }) => {
          console.log('Error: ', error)
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
      parentCallback(false, 0, fullPostcode)
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
