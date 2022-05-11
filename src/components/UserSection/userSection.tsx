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
      console.log(session?.jwt)
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
              <Link href={'/profile/me'} passHref>
                <span>
                  <AccountCircle size={24} />
                  <p>Meu perfil</p>
                </span>
              </Link>
              <Link href={'/packs/me'} passHref>
                <span>
                  <ShoppingBag size={24} />
                  <p>Meu pack</p>
                </span>
              </Link>
              <span role={'button'} onClick={() => signOut()}>
                <ExitToApp size={24} />
                <p>Log Off</p>
              </span>
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
