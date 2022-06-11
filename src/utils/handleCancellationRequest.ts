import axios, { AxiosResponse } from 'axios'

const handleCancellationRequest = (type: string, jwt: string | unknown) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + jwt,
  }

  axios
    .post(
      process.env.NEXT_PUBLIC_API_URL + '/cancellation',
      { type },
      {
        headers,
      }
    )
    .then((response: AxiosResponse<unknown>) => {
      console.log(response)
    })
    .catch((err) => {
      throw new Error('Cancellation Error', { cause: err })
    })
}

export default handleCancellationRequest
