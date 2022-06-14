import * as S from './styles'

import { UserME } from 'types/api'

import BtnLittle from 'components/BtnLittle'

type Props = {
  user?: UserME | null
}

const ProfileTemplate = ({ user }: Props) => {
  return (
    <S.FlexCenter>
      {!user && <h1>Usuário inexistente</h1>}
      {user && (
        <>
          <S.TextBigger>Meu perfil</S.TextBigger>
          <S.Content>
            <S.Text>Dados não editáveis</S.Text>
            <S.Row>
              <S.Item>
                <S.Text>
                  <S.Span>Nome:</S.Span>
                  <S.Span>{user.username}</S.Span>
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Email:</S.Span>
                  <S.Span>{user.email}</S.Span>
                </S.Text>
              </S.Item>
            </S.Row>
          </S.Content>

          <S.Content>
            <S.Text>Dados editáveis</S.Text>
            <S.Row>
              <S.Item>
                <S.Text>
                  <S.Span>Celular:</S.Span>
                  <S.Input value={user.phone} />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>CEP:</S.Span>
                  <S.Input value={user.postCode} />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Número:</S.Span>
                  <S.Input value={user.addressNumber} />
                </S.Text>
              </S.Item>
              <S.Item>
                <S.Text>
                  <S.Span>Complemento:</S.Span>
                  <S.Input value={user.addressComplement} />
                </S.Text>
              </S.Item>
            </S.Row>
          </S.Content>
          <S.Row>
            <S.Content>
              <BtnLittle
                text={'Gravar'}
                height={'50px'}
                dangerMode={false}
                noScale={true}
                parentCallback={() => console.log('GRAVAR')}
              />
            </S.Content>
            <S.Content>
              <BtnLittle
                text={'Deletar'}
                height={'50px'}
                dangerMode={true}
                parentCallback={() => console.log('DELETAR PERFIL')}
              />
            </S.Content>
          </S.Row>
        </>
      )}
    </S.FlexCenter>
  )
}

export default ProfileTemplate
