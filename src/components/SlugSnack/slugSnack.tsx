import React from 'react'

import * as S from './styles'

// import { getImageUrl } from 'utils/getImageUrl'

type Data = {
  Quantity: number
  Name: string
  ImageFile: string
}

const SlugSnack = ({ ...Data }: Data) => (
  <S.Item>
    <S.H>
      <S.Span>{Data.Quantity}</S.Span> <S.Span>x</S.Span>{' '}
      <S.Span>{Data.Name}</S.Span>
    </S.H>
    <S.ImgComp
      src={'https://via.placeholder.com/363x500.png/'}
      // src={getImageUrl(Data.ImageFile)}
      alt={Data.Name}
    />
    <S.NutritionFacts>
      <S.T>Nutrition Facts</S.T>
      <S.P>
        Porção:<S.S>50g</S.S>
      </S.P>
      <S.P>
        Valor Energético:<S.S>50 kcal</S.S>
      </S.P>
      <S.P>
        Carboidratos:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Proteínas:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Gordura Total:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Gordura Saturada:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Gordura Trans:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Sódio:<S.S>5g</S.S>
      </S.P>
      <S.P>
        Fibras:<S.S>5g</S.S>
      </S.P>
    </S.NutritionFacts>
  </S.Item>
)

export default SlugSnack
