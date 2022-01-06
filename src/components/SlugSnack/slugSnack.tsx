import React from 'react'

import * as S from './styles'

import { NutritionFacts } from 'types/api'

// import { getImageUrl } from 'utils/getImageUrl'

type Data = {
  Quantity: number
  Name: string
  ImageFile: string
  BaseValue?: number
  NutritionFacts: NutritionFacts
}

const SlugSnack = ({ ...Data }: Data) => (
  <S.Item margimBottom={typeof Data.BaseValue === 'number'}>
    <S.H>
      <S.Span widthByLength={Data.Quantity.toString().length}>
        {Data.Quantity}
      </S.Span>{' '}
      <S.Span>x</S.Span> <S.Span>{Data.Name}</S.Span>
    </S.H>
    <S.ImgComp
      src={'https://via.placeholder.com/363x500.png/'}
      // src={getImageUrl(Data.ImageFile)}
      alt={Data.Name}
    />
    <S.NutritionFacts>
      <S.T>Nutrition Facts</S.T>
      <S.P>
        Porção:<S.S>{Data.NutritionFacts.Portion}g</S.S>
      </S.P>
      <S.P>
        Valor Energético:<S.S>{Data.NutritionFacts.EnergeticValue} kcal</S.S>
      </S.P>
      <S.P>
        Carboidratos:<S.S>{Data.NutritionFacts.Carbohydrates}g</S.S>
      </S.P>
      <S.P>
        Proteínas:<S.S>{Data.NutritionFacts.Proteins}g</S.S>
      </S.P>
      <S.P>
        Gordura Total:<S.S>{Data.NutritionFacts.TotalFat}g</S.S>
      </S.P>
      <S.P>
        Gordura Saturada:<S.S>{Data.NutritionFacts.SaturatedFat}g</S.S>
      </S.P>
      <S.P>
        Gordura Trans:<S.S>{Data.NutritionFacts.TransFat}g</S.S>
      </S.P>
      <S.P>
        Sódio:<S.S>{Data.NutritionFacts.Sodium}g</S.S>
      </S.P>
      <S.P>
        Fibras:<S.S>{Data.NutritionFacts.DietaryFiber}g</S.S>
      </S.P>
    </S.NutritionFacts>
  </S.Item>
)

export default SlugSnack
