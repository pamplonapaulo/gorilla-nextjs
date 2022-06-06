import { useState, useEffect } from 'react'
import {
  AccountCircle,
  ExitToApp,
  ShoppingBag,
} from '@styled-icons/material-outlined'
import Link from 'next/link'

import User from 'components/User'
import UserOn from 'components/UserOn'

import { useUser, useOverlay } from 'contexts'

import { getFirstName } from 'utils/getFirstName'
import * as S from './styles'

import { signOut, useSession } from 'next-auth/client'

const UserSection = () => {
  const { userLog, setUserLog } = useUser()
  const { overlay, setOverlay } = useOverlay()
  const [session] = useSession()
  const [dropDownVisibility, setDropDownVisibility] = useState(false)

  useEffect(() => {
    if (typeof session?.user?.name === 'string') {
      setUserLog(session?.user?.name)
    }
  }, [session, setUserLog])

  return (
    <>
      <S.Container>
        {userLog !== 'false' ? (
          <>
            <S.Wrap
              isVisible={dropDownVisibility}
              onClick={() => setDropDownVisibility(!dropDownVisibility)}
            >
              <UserOn />
              <S.Hello>{getFirstName(userLog)}</S.Hello>
            </S.Wrap>
            <S.DropDown>
              <Link href={'/perfil/'} passHref>
                <S.NavItem>
                  <AccountCircle size={24} />
                  <S.NavText>Meu perfil</S.NavText>
                </S.NavItem>
              </Link>
              <Link href={'/assinatura'} passHref>
                <S.NavItem>
                  <ShoppingBag size={24} />
                  <S.NavText>Meu pack</S.NavText>
                </S.NavItem>
              </Link>
              <S.NavItem
                role={'button'}
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <ExitToApp size={24} />
                <S.NavText>Log Off</S.NavText>
              </S.NavItem>
            </S.DropDown>
          </>
        ) : (
          <>
            <S.Wrap>
              <S.BtnWrapper onClick={() => setOverlay(!overlay)}>
                <User />
              </S.BtnWrapper>
            </S.Wrap>
          </>
        )}
      </S.Container>
    </>
  )
}

export default UserSection
