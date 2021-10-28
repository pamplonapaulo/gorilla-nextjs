import React, { useState, useEffect } from 'react'

import CartAction from 'components/CartAction'
import ItemsArrayMap from 'components/ItemsArrayMap'

import { BagItem } from 'types/api'

import { useBag } from 'contexts'

import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
  isCartPage?: boolean
}

const MountOrders = ({ children, isCartPage }: Props) => {
  const { bag, setBag } = useBag()
  const [totalOnBag, setTotalOnBag] = useState(0)
  const [arrBuys, setArrBuys] = useState<BagItem[] | []>([])
  const [arrSubs, setArrSubs] = useState<BagItem[] | []>([])
  const [subtotal, setSubtotal] = useState<number>(0)

  const handleQuantity = (
    item: BagItem,
    subscription: boolean,
    totalItems: number
  ) => {
    const updated = {
      ...item,
      quantityToSubscribe: subscription ? totalItems : item.quantityToSubscribe,
      quantityToBuy: !subscription ? totalItems : item.quantityToBuy,
    }

    const match = (p: BagItem) => p.id == item.id

    if (bag.some(match)) {
      const arr = bag
      arr.splice(arr.findIndex(match), 1)

      setBag([...arr, updated])
    }
  }

  const hasBuys = (p: BagItem) => p.quantityToBuy > 0
  const hasSubs = (p: BagItem) => p.quantityToSubscribe > 0

  useEffect(() => {
    if (bag.some(hasBuys)) {
      setArrBuys(bag.filter(hasBuys))
    } else {
      setArrBuys([])
    }
    if (bag.some(hasSubs)) {
      setArrSubs(bag.filter(hasSubs))
    } else {
      setArrSubs([])
    }
  }, [bag, setArrBuys, setArrSubs])

  useEffect(() => {
    let value = 0
    let totalOnBuy = 0
    let totalOnSub = 0

    for (let i = 0; i < arrBuys.length; i++) {
      value += arrBuys[i].price * arrBuys[i].quantityToBuy
      totalOnBuy += arrBuys[i].quantityToBuy
    }

    for (let i = 0; i < arrSubs.length; i++) {
      value += arrSubs[i].price * arrSubs[i].quantityToSubscribe
      totalOnSub += arrSubs[i].quantityToSubscribe
    }

    setSubtotal(value)
    setTotalOnBag(totalOnSub + totalOnBuy)
  }, [arrBuys, arrSubs, setSubtotal])

  return (
    <>
      <Title isCartPage={isCartPage}>Carrinho de compras ({totalOnBag})</Title>
      <ProductsWrap>
        <ItemsArrayMap
          isCartPage={isCartPage}
          items={arrSubs}
          subscription={true}
          parentCallback={handleQuantity}
        />
        <ItemsArrayMap
          isCartPage={isCartPage}
          items={arrBuys}
          subscription={false}
          parentCallback={handleQuantity}
        />
      </ProductsWrap>
      <Footer>
        {!isCartPage && (
          <>
            <FooterText>Subtotal:</FooterText>
            <FooterText>R$ {subtotal.toFixed(2)}</FooterText>
          </>
        )}
        {isCartPage && (
          <Title isCartPage={isCartPage}>
            Subtotal: R$ {subtotal.toFixed(2)}
          </Title>
        )}
      </Footer>
      <CartAction
        isVisible={totalOnBag > 0}
        actionLink={'/cart'}
        actionName={'Concluir'}
      />
      {children}
    </>
  )
}

const Footer = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`

const FooterText = styled.h6`
  color: #47311b;
  font-size: 1.5rem;
  margin: 10px 0;
  width: calc(95% / 2);

  &&:nth-of-type(2) {
    text-align: right;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const Title = styled.h1<{
  isCartPage?: boolean
}>`
  color: #47311b;
  border-bottom: ${(p) => (p.isCartPage ? 'none' : '1px solid darkgray')};
  padding: ${(p) => (p.isCartPage ? '15px 15px 15px 0' : '15px')};
  text-align: ${(p) => (p.isCartPage ? 'left' : 'center')};
  width: 100%;
`

const ProductsWrap = styled.section`
  width: 100%;
`

export default MountOrders
