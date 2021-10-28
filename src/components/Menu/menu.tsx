import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import * as S from './styles'
import { useMenu } from 'contexts'

const Menu = ({
  pages = [
    ['packs', '/packs', 'true'],
    ['snacks', '/snacks', 'true'],
  ],
}) => {
  const { menu, setMenu } = useMenu()
  const [current, setCurrent] = useState('string')

  Router.events.on('routeChangeStart', (url) => {
    const match: RegExpExecArray | null = /\/[a-z]{3,}/g.exec(url)

    if (match && url === '/home') {
      setCurrent(match[0])
    } else if (match && url === '/packs') {
      setCurrent(match[0])
      setMenu(!menu)
    } else if (match) {
      setCurrent(match[0])
    }
  })

  return (
    <S.SideBar className={menu ? 'active' : ''}>
      <S.List>
        {pages.map((page) => (
          <S.D key={page[0]}>
            {page[2] && (
              <Link href={page[1]}>
                <S.Item className={page[1] == current ? 'active' : ''}>
                  <S.H1>{page[0]}</S.H1>
                </S.Item>
              </Link>
            )}
          </S.D>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
