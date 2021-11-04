import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'

import { Snack } from 'types/api'

type Props = {
  pack: Snack[]
  parentCallback: () => void
}

const DeliveryCalc = ({ pack, parentCallback }: Props) => {
  const [postcode, setPostcode] = useState('')

  useEffect(() => {
    if (postcode.length > 8) {
      parentCallback()
    }
  }, [parentCallback, postcode])

  useEffect(() => {
    if (postcode.length > 8) {
      const cepWithoutDash = postcode.replace('-', '')
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append(
        'Authorization',
        'Bearer {{def502009333ba44f917aa900696a0b337de47a038c63d0d07af976bdb3e71f3b60eb08364567540ea2f0cea4e9c1facb4cc80d08f3542bd508a51aac735e4c7f340a23efc83399e29244283369931979a1c7bf613de414bd6bbc024891d384c06679832d11daa0b0e59941529386082047ff1e56478afb7623e7a3c7824a0878c425412d0926b77d1ac08eced15c6af9580866b7f5cd2f357cff8b159e3b2a4a36f235d7eed602b61d76c415b1bad8c2184db80ba3f32f75b53f30ad7f414413f114332063f1ab9bb11205add029944bef9fbe31bc707fd62c116823c0a40bcf80a46d8711fd0e8b705bfb972d5713c87a5a12af1660c727fafbca091c85b9452c7bdd76c1e00e3868d79c7ef0637223c0de2b4596e66246c8018f45a4aa45d8f63b66c1a58437e91e9155859de748d7f804066748427ab97765768018098174aab626c4de69b9afea0902d3f2d59c44b3e952364e33b7eeec580531a40dff97c19d1e1e0255e43c77f89ae39f713dab17ac996717632f0546fcb329d6210c0945caf0396ebae644b395145e718d4c5188cf17227}}'
      )
      myHeaders.append('User-Agent', 'Gorilla Pack (pamplonapaulo@gmail.com)')
      myHeaders.append('Access-Control-Allow-Origin', '*')

      const raw = JSON.stringify({
        from: {
          postal_code: '20756190',
        },
        to: {
          postal_code: cepWithoutDash,
        },
        products: [
          {
            id: 'x',
            width: 11,
            height: 17,
            length: 11,
            weight: 0.3,
            insurance_value: 10.1,
            quantity: 1,
          },
          {
            id: 'y',
            width: 16,
            height: 25,
            length: 11,
            weight: 0.3,
            insurance_value: 55.05,
            quantity: 2,
          },
          {
            id: 'z',
            width: 22,
            height: 30,
            length: 11,
            weight: 1,
            insurance_value: 30,
            quantity: 1,
          },
        ],
      })

      // const formdata = new FormData()
      // formdata.append('grant_type', 'authorization_code')
      // formdata.append('client_id', '{{2385}}')
      // formdata.append(
      //   'client_secret',
      //   '{{1PzpeIIN9pu9JLKCj0nEE1rbvE5qBzwuWpCdr4rA}}'
      // )
      // formdata.append('redirect_uri', '{{https://gorilla-nextjs.vercel.app/}}')
      // formdata.append('code', '{{}}')

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow',
      }

      fetch(
        'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate',
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    }
  }, [pack, postcode])

  const postCodeMask = (value: string) =>
    value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')

  const handleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPostcode(postCodeMask(e.target.value))

  return (
    <>
      <S.Wrap>
        <S.Label>Digite o CEP para as entregas:</S.Label>
        <S.Input value={postcode} onChange={handleChangePostCode} />
        <S.Label>Custo de cada frete:</S.Label>
        <S.Cost>R$ {'99,00'}</S.Cost>
      </S.Wrap>
    </>
  )
}

export default DeliveryCalc
