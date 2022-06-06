import * as S from './styles'

import { UserME } from 'types/api'

type Props = {
  user: UserME
}

const ProfileTemplate = ({ user }: Props) => {
  return (
    <>
      <S.FlexCenter>
        <S.Text step="1">Dados não editáveis</S.Text>
        <S.Content>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
        </S.Content>

        <S.Text step="2">Dados editáveis</S.Text>
        <S.Content>
          <h1>{user.phone}</h1>
          <h1>{user.postCode}</h1>
          <h1>{user.addressNumber}</h1>
          <h1>{user.addressComplement}</h1>
        </S.Content>
      </S.FlexCenter>
    </>
  )
}

export default ProfileTemplate
