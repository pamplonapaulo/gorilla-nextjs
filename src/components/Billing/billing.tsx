import React, { useState } from 'react'
import Button from 'components/Button'

import axios, { AxiosResponse } from 'axios'
import { useSession } from 'next-auth/client'

import * as S from './styles'

import { ExpectedPayments } from 'types/api'

type Billing = {
  otherValues: ExpectedPayments
  deliveryFee: number
}

const Billing = ({ ...billing }: Billing) => {
  const [loading, setLoading] = useState(false)
  const [coupon, setCoupon] = useState({
    name: '',
    discountInCentavos: 0,
  })
  const [valueToPay, setValueToPay] = useState<number>(
    billing.otherValues.finalValueInCentavos
  )

  const [session] = useSession()

  const handleSetCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon({
      ...coupon,
      name: e.target.value,
    })
  }

  const handleCupon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session?.jwt,
    }

    interface ServerData {
      success: {
        id: number
        monthsMultiplier: number
        finalValueInCentavos: number
        absoluteDiscountApplied: number
        contentCostBeforeDiscount: number
        finalValueInCentavosWithCoupon: number
        absoluteCouponDiscountAppliedInCentavos: number
      }
    }

    axios
      .post<ServerData>(
        process.env.NEXT_PUBLIC_API_URL + '/coupon-handler',
        {
          name: coupon.name,
        },
        {
          headers,
        }
      )
      .then((res: AxiosResponse<ServerData>) => {
        setValueToPay(res.data.success.finalValueInCentavosWithCoupon)
        setCoupon({
          ...coupon,
          discountInCentavos:
            res.data.success.absoluteCouponDiscountAppliedInCentavos,
        })
        setLoading(false)
        // melhorar a UX do carregamento, está rápido demais.
      })
      .catch((err) => {
        console.log(err)
        // preparar alerta de cupom rejeitado
        setLoading(false)
      })
  }

  return (
    <>
      <S.Row>
        <S.Column>
          <S.Text>Cupom</S.Text>
          <div>
            <S.Wrap>
              <S.Input
                value={coupon.name}
                onChange={handleSetCoupon}
                width="140px"
              />
            </S.Wrap>
            <Button
              disabled={loading}
              parentCallback={(e) => handleCupon(e)}
              colorOne={'#facb37'}
              colorTwo={'#000'}
            >
              {loading ? <S.Loading /> : 'Validar'}
            </Button>
          </div>
        </S.Column>
      </S.Row>

      <S.Prices>
        <S.Column>
          <S.Text>Fatura detalhada</S.Text>
          <br />
          <br />
        </S.Column>

        <S.Column>
          <S.LittleText>
            <span>Pack:</span>
            <span>+ R$ {billing.otherValues.contentCostBeforeDiscount}</span>
          </S.LittleText>
          <S.LittleText>
            <span>Assinatura:</span>
            <span>- R$ {billing.otherValues.absoluteDiscountApplied}</span>
          </S.LittleText>
          <S.LittleText>
            <span>Cupom:</span>
            <span>- R$ {coupon.discountInCentavos / 100}</span>
          </S.LittleText>
          <S.LittleText>
            <span>Frete:</span>
            <span>+ R$ {billing.deliveryFee}</span>
          </S.LittleText>
          <S.LittleText>
            <span>Total por mês:</span>
            <span>R$ {valueToPay / 100}</span>
          </S.LittleText>
        </S.Column>
      </S.Prices>
    </>
  )
}

export default Billing
