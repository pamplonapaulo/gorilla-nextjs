import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import { useQuery } from '@apollo/client'
import GET_PLANS from 'graphql/queries/getPlans'

import { formatCurrency } from 'utils/formatCurrency'

import { Snack, Plans, ProductFull } from 'types/api'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'

import Btn from 'components/Btn'
import BtnRadio from 'components/BtnRadio'
import DeliveryCalc from 'components/DeliveryCalc'
import Loader from 'components/Loader'
import Arrow from 'components/Arrow'

import { useUser, useOverlay } from 'contexts'

const client = new GraphQLClient(endpoint + 'graphql')

const PackPanel = ({ pack }: { pack: Snack[] }) => {
  const [snacksCost, setSnacksCost] = useState<boolean | number>(false)
  const [discount, setDiscount] = useState<number>(-1)
  const [deliveryFee, setDeliveryFee] = useState<boolean | number>(false)
  const [finalPrice, setFinalPrice] = useState(0)
  const [mobilePanelStep, setMobilePanelStep] = useState(0)
  const [deliveryReset, setDeliveryReset] = useState(false)
  const [forwardBtn, setForwardBtn] = useState(false)
  const [minimumValue, setMinimumValue] = useState(987654)
  const { userLog } = useUser()
  const { setOverlay } = useOverlay()
  const { loading, error, data } = useQuery(GET_PLANS)
  const router = useRouter()

  const completeSnackDetails = async (s: Snack) => {
    const GET_PRODUCT = gql`
      query GET_PRODUCT {
        product(id: ${s.id}) {
          data {
            id
            attributes {
              Name
              BaseValue
              Weight
              Height
              Width
              Length
            }
          }
        }
      }
    `
    const { product } = await client.request(GET_PRODUCT)

    product.photo = s.photo
    product.TotalValue = s.quantity * product.data.attributes.BaseValue
    product.quantity = s.quantity
    return product
  }

  const planIsSet = (upcomingDiscount: number) => {
    setDiscount(upcomingDiscount)
  }

  const handleDeliveryFeeDisplay = (bool: boolean, deliveryFee: number) => {
    if (!bool) {
      setDeliveryReset(true)
      setDeliveryFee(false)
      setFinalPrice(0)
    }

    if (bool) {
      setDeliveryFee(deliveryFee)
    }
  }

  const callCheckoutPage = () => {
    console.log('userLog:', userLog)

    if (userLog === 'false') {
      setOverlay(true)
    } else {
      console.log('make route to checkout page...')
      router.push('/checkout')
    }
  }

  const moveBackwards = () => {
    setMobilePanelStep(mobilePanelStep - 1)
    setForwardBtn(true)
  }

  const moveForward = () => {
    console.log('forward button:', forwardBtn)

    if (mobilePanelStep === 3) callCheckoutPage()

    if (forwardBtn) {
      setMobilePanelStep(mobilePanelStep + 1)
      setForwardBtn(false)
    }
  }

  useEffect(() => {
    if (
      typeof snacksCost === 'number' &&
      discount > -1 &&
      typeof deliveryFee === 'number'
    ) {
      const afterDiscount = applyDiscount(snacksCost, discount)
      const afterAll = afterDiscount + deliveryFee
      setFinalPrice(afterAll)
    }
  }, [snacksCost, discount, deliveryFee])

  useEffect(() => {
    if (mobilePanelStep === 2 && deliveryFee !== false) setForwardBtn(true)
    if (mobilePanelStep === 2 && deliveryFee === false) setForwardBtn(false)
  }, [deliveryFee, mobilePanelStep])

  useEffect(() => {
    if (mobilePanelStep === 1 && discount > -1) setForwardBtn(true)
    if (mobilePanelStep === 1 && discount === -1) setForwardBtn(false)
  }, [discount, mobilePanelStep])

  useEffect(() => {
    if (mobilePanelStep === 0 && snacksCost >= 7) setForwardBtn(true)
    if (mobilePanelStep === 0 && snacksCost < 7) setForwardBtn(false)
  }, [snacksCost, mobilePanelStep])

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

  useEffect(() => {
    const isCustomPack = () => {
      const text = window.location.href
      const pattern = /packs\/custom/
      return pattern.test(text)
    }

    const getMinimumValue = async () => {
      if (!isCustomPack()) {
        setMinimumValue(0)
        return
      }

      const GET_MINIMUM_VALUE = gql`
        query GET_MINIMUM_VALUE {
          minimumPackValue {
            data {
              attributes {
                MinimumValue
              }
            }
          }
        }
      `
      const { minimumPackValue } = await client.request(GET_MINIMUM_VALUE)
      setMinimumValue(minimumPackValue.data.attributes.MinimumValue)
    }

    if (minimumValue === 987654) getMinimumValue()

    if (minimumValue <= snacksCost) setForwardBtn(true)
    else setForwardBtn(false)
  }, [minimumValue, snacksCost])

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <S.PackPanel isVisible={pack.length > 0} showOnMobile={mobilePanelStep > 0}>
      <S.MobileBtnWrapper>
        <S.UnderLimitMessage
          isVisible={mobilePanelStep === 0 && minimumValue !== 0}
        >
          <S.SpanMessage
            gotMinimumValue={snacksCost >= minimumValue}
          ></S.SpanMessage>
        </S.UnderLimitMessage>
        <S.ActionBtn
          onClick={() => moveBackwards()}
          switchContent={true}
          isHidden={
            (mobilePanelStep === 0 && snacksCost >= minimumValue) ||
            mobilePanelStep < 1
          }
          isCentered={false}
        >
          <S.BtnText>{'Voltar'}</S.BtnText>
          <Arrow rotate={'0'} />
        </S.ActionBtn>

        <S.ActionBtn
          onClick={() => moveForward()}
          switchContent={false}
          isDeactivated={forwardBtn === false}
          shouldPulse={mobilePanelStep === 3 || forwardBtn === true}
          isCentered={mobilePanelStep === 0 && minimumValue === 0}
        >
          <S.BtnText>
            {mobilePanelStep === 3 ? 'Concluir' : 'Avançar'}
          </S.BtnText>
          <Arrow rotate={'180'} />
        </S.ActionBtn>
      </S.MobileBtnWrapper>

      <S.Content isVisible={pack.length > 0}>
        <S.Text shouldPulse={false}>Pack</S.Text>
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
      <S.Content
        isVisible={snacksCost >= minimumValue}
        showOnMobile={mobilePanelStep === 1}
      >
        <S.Text shouldPulse={discount === -1}>Plano</S.Text>
        {data.periods.data.map((p: Plans) => (
          <S.Items key={p.id}>
            <BtnRadio
              item={p.attributes.Type}
              group={'plano'}
              parentCallback={planIsSet}
              discount={p.attributes.Discount}
              neverClicked={discount === -1}
            />
            <S.HoverContent>
              {formatDiscount(p.attributes.Discount)}% off
            </S.HoverContent>
          </S.Items>
        ))}
      </S.Content>
      <S.Content
        isVisible={discount > -1 && snacksCost >= minimumValue}
        showOnMobile={mobilePanelStep === 2}
      >
        <S.Text shouldPulse={false}>Frete</S.Text>
        <S.Items>
          <DeliveryCalc
            forceReset={deliveryReset}
            pack={pack}
            parentCallback={handleDeliveryFeeDisplay}
          />
        </S.Items>
      </S.Content>
      <S.Content
        isVisible={
          deliveryFee !== false && discount > -1 && snacksCost >= minimumValue
        }
        showOnMobile={mobilePanelStep === 3}
      >
        <S.Text shouldPulse={false}>Total</S.Text>
        <S.Text shouldPulse={false}>
          R$ {formatCurrency(finalPrice)}/<span> mês</span>
        </S.Text>
        <Btn
          parentCallback={callCheckoutPage}
          displayMobile={'none'}
          text={'Avançar'}
        />
      </S.Content>
    </S.PackPanel>
  )
}

export default PackPanel
