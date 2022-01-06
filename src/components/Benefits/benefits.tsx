import React from 'react'

import { useQuery } from '@apollo/client'
import GET_BENEFITS from 'graphql/queries/getBenefits'

import Loader from 'components/Loader'

import * as S from './styles'

import { Benefit } from 'types/api'

type Data = {
  benefits: Benefit[]
  isHome: boolean
}

const Benefits = ({ ...Data }: Data) => {
  const { loading, error, data } = useQuery(GET_BENEFITS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Erro no carregamento dos BENEFÍCIOS</p>

  console.log('teste:')
  console.log(data)

  return (
    <>
      <S.Benefits isHome={Data.isHome}>
        {Data.benefits.map((b: Benefit) => (
          <S.Attribute
            key={b.benefit.id}
            isChecked={b.CurrentStatus}
            isHome={Data.isHome}
          >
            {b.benefit.Benefit}
          </S.Attribute>
        ))}
        {/* {Data.benefits.map((b: Benefit) => (
          <S.Attribute key={b.benefit.id} isChecked={b.CurrentStatus}>
            {b.benefit.Benefit}
          </S.Attribute>
        ))} */}
      </S.Benefits>
    </>
  )
}

export default Benefits
