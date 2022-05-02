import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'
import { useSession } from 'next-auth/client'

import * as S from './styles'

import { initializeApollo } from 'utils/apollo'
import { GET_PRODUCT, GET_MINIMUM_VALUE } from 'graphql/queries'

import { formatCurrency } from 'utils/formatCurrency'

import { Snack, Plans, ProductFull } from 'types/api'

import Btn from 'components/Btn'
import BtnRadio from 'components/BtnRadio'
import DeliveryCalc from 'components/DeliveryCalc'
import Arrow from 'components/Arrow'

import { useOverlay } from 'contexts'

type PanelData = {
  pack: Snack[]
  plans: Plans[]
  packId?: string
}

const PackPanel = ({ ...panelData }: PanelData) => {
  const [snacksCost, setSnacksCost] = useState<boolean | number>(false)
  const [discount, setDiscount] = useState<number>(-1)
  const [planId, setPlanId] = useState<number | null>(null)
  const [deliveryFee, setDeliveryFee] = useState<boolean | number>(false)
  const [postCode, setPostCode] = useState('')
  const [finalPrice, setFinalPrice] = useState(0)
  const [mobilePanelStep, setMobilePanelStep] = useState(0)
  const [deliveryReset, setDeliveryReset] = useState(false)
  const [forwardBtn, setForwardBtn] = useState(false)
  const [minimumValue, setMinimumValue] = useState(987654)
  const [checkoutBtn, setCheckoutBtn] = useState('Avançar')
  const { setOverlay } = useOverlay()

  const router = useRouter()
  const [session] = useSession()

  console.log(
    'process.env.NEXT_PUBLIC_API_URL: ',
    process.env.NEXT_PUBLIC_API_URL
  )

  const completeSnackDetails = async (s: Snack) => {
    const apolloClient = initializeApollo()

    const { data } = await apolloClient.query({
      query: GET_PRODUCT,
      variables: { id: `${s.id}` },
    })

    const snack = {
      ...data,
      product: {
        photo: s.photo,
        quantity: s.Quantity,
        TotalValue: s.Quantity * data.product.data.attributes.BaseValue,
      },
    }

    return snack.product
  }

  const planIsSet = (upcomingDiscount: number, planId: number) => {
    setPlanId(planId)
    setDiscount(upcomingDiscount)
  }

  const handleDeliveryFeeDisplay = (
    bool: boolean,
    deliveryFee: number,
    postCode: string
  ) => {
    if (!bool) {
      setDeliveryReset(true)
      setDeliveryFee(false)
      setFinalPrice(0)
    }

    if (bool) {
      setPostCode(postCode)
      setDeliveryFee(deliveryFee)
    }
  }

  const postOrderIntent = async () => {
    const order = {
      period: planId,
      users_permissions_user: session?.id,
      snack: panelData.packId ? undefined : panelData.pack,
      pack: panelData.packId,
      postCode: postCode,
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session?.jwt,
    }

    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + '/orderIntent',
        {
          ...order,
        },
        {
          headers,
          onDownloadProgress: (event) => {
            const progress: number = Math.round(
              (event.loaded * 100) / event.total
            )

            console.log(`Processamento: ${progress}% carregado... `)
          },
        }
      )
      .then((response: AxiosResponse<unknown>) => {
        console.log(response.data)
        router.push('/checkout')
      })
      .catch((error) => {
        console.log(error)
        setCheckoutBtn('Erro :(')
      })
  }

  const callCheckoutPage = () => {
    if (session) {
      setCheckoutBtn('saving')
      postOrderIntent()
    } else {
      setOverlay(true)
    }
  }

  const moveBackwards = () => {
    setMobilePanelStep(mobilePanelStep - 1)
    setForwardBtn(true)
  }

  const moveForward = () => {
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
      panelData.pack.map(async (s: Snack) => await completeSnackDetails(s))
    )
    asyncRes.then(function (result) {
      let partialPrice = 0
      result.map(
        (p: ProductFull) => (partialPrice = partialPrice + p.TotalValue)
      )
      setSnacksCost(partialPrice)
    })
  }, [panelData])

  useEffect(() => {
    // const isCustomPack = () => {
    //   const text = window.location.href
    //   const pattern = /packs\/custom/
    //   return pattern.test(text)
    // }

    const getMinimumValue = async () => {
      // if (!isCustomPack()) {
      if (panelData.packId) {
        setMinimumValue(0)
        return
      }
      const apolloClient = initializeApollo()
      const { data } = await apolloClient.query({
        query: GET_MINIMUM_VALUE,
      })

      setMinimumValue(data.minimumPackValue.data.attributes.MinimumValue)
    }

    if (minimumValue === 987654) getMinimumValue()

    if (minimumValue <= snacksCost) setForwardBtn(true)
    else setForwardBtn(false)
  }, [minimumValue, snacksCost, panelData.packId])

  return (
    <S.PackPanel
      isVisible={panelData.pack.length > 0}
      showOnMobile={mobilePanelStep > 0}
    >
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

      <S.Content isVisible={panelData.pack.length > 0}>
        <S.Text shouldPulse={false}>Pack</S.Text>
        <S.Items>
          {panelData.pack.map((s: Snack) => (
            <S.Snack key={s.id}>
              <S.Icon
                src={'https://via.placeholder.com/113x156.png/'}
                // src={getImageUrl(`/uploads/thumbnail_${s.photo}`)}
                alt={'teste'}
              />
              <S.Quantity>
                <span>{'x'}</span>
                {s.Quantity}
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
        {panelData.plans.map((p: Plans) => (
          <S.Items key={p.id}>
            <BtnRadio
              id={Number(p.id)}
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
            pack={panelData.pack}
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
          isDisable={checkoutBtn === 'saving'}
        >
          {checkoutBtn === 'saving' ? <S.Loading /> : checkoutBtn}
        </Btn>
      </S.Content>
    </S.PackPanel>
  )
}

export default PackPanel
