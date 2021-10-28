import React, { useState, useEffect } from 'react'

import CartItem from 'components/CartItem'

import { BagItem } from 'types/api'

type Props = {
  items: BagItem[]
  subscription: boolean
  parentCallback: (
    item: BagItem,
    subscription: boolean,
    totalItems: number
  ) => void
  isCartPage?: boolean
}

const ItemsArrayMap = ({
  items,
  subscription,
  parentCallback,
  isCartPage,
}: Props) => {
  const [arr, setArr] = useState(items)

  useEffect(() => {
    setArr(items.sort((a: BagItem, b: BagItem) => a.name.localeCompare(b.name)))
  }, [items, setArr])

  return (
    <>
      {arr.map((p: BagItem) => (
        <CartItem
          isCartPage={isCartPage}
          key={p.name}
          subscription={subscription}
          quantity={subscription ? p.quantityToSubscribe : p.quantityToBuy}
          parentCallback={parentCallback}
          item={p}
        />
      ))}
    </>
  )
}

export default ItemsArrayMap
