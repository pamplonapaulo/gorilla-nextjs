import { useState, useEffect } from 'react'
import * as S from './styles'

import { useRouter } from 'next/router'

import { UserME } from 'types/api'

type Props = {
  user?: UserME
}

const RegisterTemplate = ({ user }: Props) => {
  const router = useRouter()
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    user &&
      countDown >= 1 &&
      setTimeout(() => setCountDown(countDown - 1), 1500)

    if (countDown === 0) {
      router.push({ pathname: '/' }, '/')
    }
  }, [countDown, user, router])

  return (
    <S.FlexCenter>
      {!user && (
        <>
          <S.TextBigger>
            Sessão expirada. Realize o login para ver se deu tudo certo com a
            validação de seu cadastro.
          </S.TextBigger>
        </>
      )}
      {user && (
        <S.Content>
          <S.Row redirect={true}>
            <S.Column>
              <S.Items>
                <S.TextBigger redirect={true}>
                  Cadastro confirmado <br /> com sucesso!
                </S.TextBigger>
              </S.Items>
            </S.Column>
            <S.Column>
              <S.Items>
                <S.TextBigger redirect={true}>
                  Redirecionando <br /> para a home... {countDown}
                </S.TextBigger>
              </S.Items>
            </S.Column>
          </S.Row>
        </S.Content>
      )}
    </S.FlexCenter>
  )
}

export default RegisterTemplate
