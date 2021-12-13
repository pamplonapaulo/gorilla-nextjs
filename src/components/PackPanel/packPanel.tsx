import React, { useState, useEffect } from 'react'

import * as S from './styles'

import { useQuery } from '@apollo/client'
import GET_PLANS from 'graphql/queries/getPlans'

// import { getImageUrl } from 'utils/getImageUrl'
import { formatCurrency } from 'utils/formatCurrency'

import { Snack, Plans, ProductFull } from 'types/api'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'

import Btn from 'components/Btn'
import BtnRadio from 'components/BtnRadio'
import DeliveryCalc from 'components/DeliveryCalc'
import Loader from 'components/Loader'

const client = new GraphQLClient(endpoint + 'graphql')

const PackPanel = ({ pack }: { pack: Snack[] }) => {
  const [snacksCost, setSnacksCost] = useState<boolean | number>(false)
  const [discount, setDiscount] = useState<boolean | number>(false)
  const [deliveryFee, setDeliveryFee] = useState<boolean | number>(false)
  const [finalPrice, setFinalPrice] = useState(0)

  const { loading, error, data } = useQuery(GET_PLANS)

  const completeSnackDetails = async (s: Snack) => {
    const GET_PRODUCT = gql`
      query GET_PRODUCT {
        product(id: ${s.id}) {
          Name
          id
          BaseValue
          Weight
          Height
          Width
          Length
        }
      }
    `

    const { product } = await client.request(GET_PRODUCT)

    product.photo = s.photo
    product.TotalValue = s.quantity * product.BaseValue
    product.quantity = s.quantity

    return product
  }

  const planIsSet = (discount: number) => {
    setDiscount(discount)
  }

  const handleDeliveryFeeDisplay = (bool: boolean, deliveryFee: number) => {
    if (bool) {
      setDeliveryFee(deliveryFee)
    }

    if (!bool) {
      setDeliveryFee(false)
      setFinalPrice(0)
    }
  }

  useEffect(() => {
    if (
      typeof snacksCost === 'number' &&
      typeof discount === 'number' &&
      typeof deliveryFee === 'number'
    ) {
      const afterDiscount = applyDiscount(snacksCost, discount)
      const afterAll = afterDiscount + deliveryFee
      setFinalPrice(afterAll)
    }
  }, [snacksCost, discount, deliveryFee])

  const formatDiscount = (value: number) => (100 * value).toFixed(0)

  const applyDiscount = (snacks: number, discount: number) =>
    snacks - snacks * discount

  useEffect(() => {
    const asyncRes = Promise.all(
      pack.map(async (s: Snack) => await completeSnackDetails(s))
    )
    asyncRes.then(function (result) {
      let partialPrice = 0
      result.map(
        (p: ProductFull) => (partialPrice = partialPrice + p.TotalValue)
      )
      setSnacksCost(partialPrice)
    })
  }, [pack])

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <S.PackPanel isVisible={pack.length > 0}>
      <S.Content isVisible={pack.length > 0}>
        <S.Text shouldPulse={false}>Pack:</S.Text>
        <S.Items>
          {pack.map((s: Snack) => (
            <S.Snack key={s.id}>
              <S.Icon
                src={'https://via.placeholder.com/113x156.png/'}
                // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
                alt={'teste'}
              />
              <S.Quantity>
                <span>{'x'}</span>
                {s.quantity}
              </S.Quantity>
            </S.Snack>
          ))}
        </S.Items>
      </S.Content>
      <S.Content isVisible={pack.length > 0}>
        <S.Text shouldPulse={!discount}>Plano:</S.Text>
        {data.periodicidades.map((p: Plans) => (
          <S.Items key={p.id}>
            <BtnRadio
              item={p.Type}
              group={'plano'}
              parentCallback={planIsSet}
              discount={p.Discount}
              neverClicked={!discount}
            />
            <S.HoverContent>{formatDiscount(p.Discount)}% off</S.HoverContent>
          </S.Items>
        ))}
      </S.Content>
      <S.Content isVisible={discount !== false}>
        <S.Text shouldPulse={false}>Frete:</S.Text>
        <S.Items>
          <DeliveryCalc pack={pack} parentCallback={handleDeliveryFeeDisplay} />
        </S.Items>
      </S.Content>
      <S.Content isVisible={deliveryFee !== false}>
        <S.Text shouldPulse={false}>Total:</S.Text>
        <S.Text shouldPulse={false}>
          R$ {formatCurrency(finalPrice)}/<span> mês</span>
        </S.Text>
        <Btn as={'/checkout'} pathname={'/checkout'} text={'Avançar'} />
      </S.Content>
    </S.PackPanel>
  )
}

export default PackPanel
