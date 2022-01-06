import React from 'react'

import * as S from './styles'

import { Benefit } from 'types/api'

type Data = {
  description: string
  benefits: Benefit[]
}

const Benefits = ({ ...Data }: Data) => {
  return (
    <>
      <S.T>{Data.description}</S.T>
      <S.Benefits>
        {Data.benefits.map((b: Benefit) => (
          <S.Attribute key={b.benefit.id} isChecked={b.CurrentStatus}>
            {b.benefit.Benefit}
          </S.Attribute>
        ))}
      </S.Benefits>
    </>
  )
}

export default Benefits
