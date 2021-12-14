import React from 'react'

import * as S from './styles'

type Data = {
  description: string
}

const Benefits = ({ ...Data }: Data) => {
  return (
    <>
      <S.T>{Data.description}</S.T>
      <S.Benefits>
        <S.Attribute isChecked={true}>
          Uso do Selo eureciclo nas embalagens do Selo eureciclo nas embalagens
        </S.Attribute>
        <S.Attribute isChecked={true}>
          Videos para seu consumidor sobre a parceria seu consumidor
        </S.Attribute>
        <S.Attribute isChecked={true}>
          Infográfico para divulgar o investimento em reciclagem divulgar o
          investimento
        </S.Attribute>
        <S.Attribute isChecked={false}>
          Entrega de informações personalizadas para criação de seus conteúdos
        </S.Attribute>
        <S.Attribute isChecked={false}>
          Cases de Sucesso no nosso site sobre a parceria site sobre a parceria
        </S.Attribute>
      </S.Benefits>
    </>
  )
}

export default Benefits
