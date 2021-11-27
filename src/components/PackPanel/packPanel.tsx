import React, { useState, useEffect } from 'react'

import * as S from './styles'

import { useQuery } from '@apollo/client'
import GET_PLANS from 'graphql/queries/getPlans'

import { getImageUrl } from 'utils/getImageUrl'
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
  const [step, setStep] = useState(0)
  const [priceAfterPack, setPriceAfterPack] = useState(0)
  const [priceAfterPlan, setPriceAfterPlan] = useState(0)
  const [planDiscount, setPlanDiscount] = useState(0)
  const [priceAfterFrete, setPriceAfterFrete] = useState(0)
  // const [bigPack, setBigPack] = useState<ProductFull[]>([])

  const { loading, error, data } = useQuery(GET_PLANS)

  const completeSnackDetails = async (s: Snack) => {
    const GET_PRODUCT = gql`
      query GET_PRODUCT {
        product(id: ${s.id}) {
          Name
          id
          BaseValue
          Weight
          WeightUnit
          Height
          Width
          Length
        }
      }
    `

    const { product } = await client.request(GET_PRODUCT)

    product.quantity = s.quantity
    product.photo = s.photo
    product.TotalValue = s.quantity * product.BaseValue

    return product
  }

  const planIsSet = (discount: number) => {
    setStep(1)
    setPlanDiscount(discount)
  }

  const handleDeliveryFeeDisplay = (bool: boolean, num: number) => {
    console.log(' ')
    console.log('bool')
    console.log(bool)
    console.log(' ')
    console.log('num')
    console.log(num)
    if (step === 1 && bool) {
      setPriceAfterFrete(priceAfterPlan + num)
      setStep(2)
    }

    if (step === 2 && !bool) {
      console.log('TOTAL PRICE deveria sumir agora')
      setPriceAfterFrete(0)
      setStep(1)
    }
  }

  useEffect(() => {
    console.log('current step is:', step)
  }, [step])

  const formatDiscount = (value: number) => (100 * value).toFixed(0)

  const applyDiscount = (initialValue: number, discount: number) =>
    initialValue - initialValue * discount

  useEffect(() => {
    const asyncRes = Promise.all(
      pack.map(async (s: Snack) => await completeSnackDetails(s))
    )
    asyncRes.then(function (result) {
      let partialPrice = 0
      result.map(
        (p: ProductFull) => (partialPrice = partialPrice + p.TotalValue)
      )
      setPriceAfterPack(partialPrice)
    })
  }, [pack])

  useEffect(() => {
    if (step > 0) setPriceAfterPlan(applyDiscount(priceAfterPack, planDiscount))
  }, [priceAfterPack, step, planDiscount])

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <S.PackPanel isVisible={pack.length > 0}>
      <S.Content isVisible={pack.length > 0}>
        <S.Text>Pack:</S.Text>
        <S.Items>
          {pack.map((s: Snack) => (
            <S.Snack key={s.id}>
              <S.Icon
                // src={'https://via.placeholder.com/113x156.png/'}
                src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
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
        <S.Text>Plano:</S.Text>
        {data.periodicidades.map((p: Plans) => (
          <S.Items key={p.id}>
            <BtnRadio
              item={p.Type}
              group={'plano'}
              parentCallback={planIsSet}
              discount={p.Discount}
            />
            <S.HoverContent>{formatDiscount(p.Discount)}% off</S.HoverContent>
          </S.Items>
        ))}
      </S.Content>
      <S.Content isVisible={step > 0}>
        <S.Text>Frete:</S.Text>
        <S.Items>
          <DeliveryCalc pack={pack} parentCallback={handleDeliveryFeeDisplay} />
        </S.Items>
      </S.Content>
      <S.Content isVisible={step > 1}>
        <S.Text>Total:</S.Text>
        <S.Text>
          R$ {formatCurrency(priceAfterFrete)}/<span> mês</span>
        </S.Text>
        <Btn as={'/checkout'} pathname={'/checkout'} text={'Avançar'} />
      </S.Content>
    </S.PackPanel>
  )
}

export default PackPanel
