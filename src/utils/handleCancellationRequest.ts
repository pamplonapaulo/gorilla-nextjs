import axios, { AxiosResponse } from 'axios'

import { Dispatch, SetStateAction } from 'react'

const handleCancellationRequest = (
  type: string,
  jwt: string | unknown,
  callback: Dispatch<SetStateAction<boolean>>,
  data?: {
    postCode: string
    phone: string
    addressNumber: string
    addressComplement: string
  }
) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + jwt,
  }

  axios
    .post(
      process.env.NEXT_PUBLIC_API_URL + '/cancellation',
      { type, data },
      {
        headers,
      }
    )
    .then((response: AxiosResponse<unknown>) => {
      console.log(response)
      return callback(true)
    })
    .catch((err) => {
      throw new Error('Cancellation Error', { cause: err })
    })
}

export default handleCancellationRequest
