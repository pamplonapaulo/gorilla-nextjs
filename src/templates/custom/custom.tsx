import React, { useState } from 'react'

import { Product, Plans } from 'types/api'

import Input from 'components/Input'
import PackPanel from 'components/PackPanel'
import SlugSnack from 'components/SlugSnack'

import * as S from './styles'

type Props = {
  products: Product[]
  plans: Plans[]
}

const CustomTemplate = ({ ...customProps }: Props) => {
  console.log('customProps')
  console.log(customProps)

  type Snack = {
    id: number
    Quantity: number
    photo?: string
  }
  const [customPack, setCustomPack] = useState<Snack[]>([])

  const panelData = {
    pack: customPack,
    plans: customProps.plans,
  }

  const handleSnackOnPack = (
    snackId: number,
    total: number,
    shouldIncrement: boolean,
    photoOfSnack: string
  ) => {
    const doNothing = !shouldIncrement && total == 0

    if (doNothing) return
    else {
      let pack = [...customPack]
      const snack = {
        id: snackId,
        Quantity: shouldIncrement ? total + 1 : total - 1,
        photo: photoOfSnack,
      }

      if (pack.some((snk) => snk.id === snackId))
        pack = pack.filter((snk) => snk.id !== snackId)

      if (snack.Quantity >= 1) pack.push(snack)

      setCustomPack([...pack])
    }
  }

  const getItem = (id: string) =>
    customPack.filter((snk) => snk.id === Number(id))

  const getQuantity = (id: string) => {
    const items = getItem(id)
    if (items.length === 1) {
      return items[0].Quantity
    } else {
      return 0
    }
  }

  const getPartial = (id: string, baseValue: number) => {
    const items = getItem(id)

    if (items.length > 0) {
      return 'R$' + items[0].Quantity * baseValue
    } else {
      return ''
    }
  }

  return (
    <>
      <S.T makeRoomToTopPanel={customPack.length !== 0}>
        {'Escolha os snacks do seu pack'}
      </S.T>
      <S.Wrapper>
        {customProps.products.map((p: Product) => {
          return (
            <S.Item key={p.id}>
              <SlugSnack
                Quantity={getQuantity(p.id)}
                Name={p.attributes.Name}
                ImageFile={
                  '/uploads/small_' +
                  p.attributes.Image.data.attributes['hash'] +
                  p.attributes.Image.data.attributes['ext']
                }
                BaseValue={p.attributes.BaseValue}
                NutritionFacts={p.attributes.NutritionFacts}
              />
              <S.H>{'R$' + p.attributes.BaseValue}</S.H>
              <S.BtnsWrapper>
                <Input
                  idOfSnack={Number(p.id)}
                  // photoOfSnack={
                  //   p.attributes.Image['hash'] + p.attributes.Image['ext']
                  // }
                  photoOfSnack={
                    p.attributes.Image.data.attributes['hash'] +
                    p.attributes.Image.data.attributes['ext']
                  }
                  parentCallback={handleSnackOnPack}
                  scale={'1'}
                  value={0}
                />
              </S.BtnsWrapper>
              <S.Sum
                isVisible={customPack.some((snk) => snk.id === Number(p.id))}
              >
                <h1>{getPartial(p.id, p.attributes.BaseValue)}</h1>
              </S.Sum>
            </S.Item>
          )
        })}
      </S.Wrapper>
      {/* <PackPanel pack={customPack} /> */}
      <PackPanel {...panelData} />
    </>
  )
}

export default CustomTemplate
