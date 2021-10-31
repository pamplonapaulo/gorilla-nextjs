import { useEffect } from 'react'
import React, { useState } from 'react'
import * as S from './styles'

import { Snack } from 'types/api'

const DeliveryCalc = ({ pack }: { pack: Snack[] }) => {
  const [postcode, setPostcode] = useState('')

  useEffect(() => {
    if (postcode.length > 8) {
      const cepWithoutDash = postcode.replace('-', '')
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append(
        'Authorization',
        'Bearer {{eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzOTEwZGEzOTFjNmMwZmU2OWVjZmI0ODBhNjg0ODI5YTM1NzUyZmUzMDJjZTAzYTJmYmE0NTRjZmRjODNjNDU3YmZmOTE2YjI0MzE2N2RiIn0.eyJhdWQiOiI5NTYiLCJqdGkiOiJlMzkxMGRhMzkxYzZjMGZlNjllY2ZiNDgwYTY4NDgyOWEzNTc1MmZlMzAyY2UwM2EyZmJhNDU0Y2ZkYzgzYzQ1N2JmZjkxNmIyNDMxNjdkYiIsImlhdCI6MTYzNTU0MjYxMSwibmJmIjoxNjM1NTQyNjExLCJleHAiOjE2NjcwNzg2MTEsInN1YiI6ImNhYjUwYmZhLWM0YWUtNDIyYy1hYjlmLWQ1MGFhN2I3NGI2NiIsInNjb3BlcyI6WyJlY29tbWVyY2Utc2hpcHBpbmciXX0.k7xly_DQXZ9jMfOyUrzt_gPKw3SHPzIfp6uICo1Y2GXnZnG9Kl8hl9OK5zgLNuA9ZKNiTFAc_4br_qNbKLxitWVar2UuKnAuHQarTTsbMxhEfJ_DMmfllAHLAogXCSprgHQ9r7P0s_42XIbheW2zogpC7UD_wtRdktni06NUz66WcEuil9sXxf8p_NsBauT62biSaDpCvpuTv5-w4nDvXx5t5471DkoVBO_q3j4SuYVziyoiFA9aibzGPu53A88VDg0MJ8dmEmlX19m_8bgwZVvNXBRYpSP_t09sNaX8z1tSgQxZzhSQQTVhzZLnX6-OJhpCtHWVaEEKzxdvaLIBXyv3lIqU2p0DSHfhRuyV51yL87xotoLAah5eR-DwIzeG8R3u9HSMydkvqwCXYcoMJcbtyBZmC9PMRQa_RAWsueX60OdkqNl4HE0Jw2jUw5mTns9TsRMyVXPghBqydmtHA0owz8izelmsPGVOf7zGtxGQIPsRKOV9ZM8hCtI__fNKeylv6K0fpCLpZCv2z6GEhDD8KP4oH3tkQ7rn6XIk9dtQAPLvEYFk9URIEiDyXo-zCQwiLQqc8zBTXRJb8C-HLs8cng9ohadDhLB3ud5EYgvu0wAcqo93CutBLSqp-WuM68fVQ6UThevsRtxFsjT2Gb1-_5wQKfg0V8_0SppJ5oQ}}'
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

      // type rqstOptns = {
      //   method: string
      //   headers: Headers
      //   body: string
      //   redirect: string
      // }

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
        <S.Label>Custo de cada entrega:</S.Label>
        <S.Cost>R$ {'44'}</S.Cost>
      </S.Wrap>
    </>
  )
}

export default DeliveryCalc
