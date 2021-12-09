import React, {
  useLayoutEffect,
  useEffect,
  useCallback,
  useState,
  useRef,
} from 'react'

import * as S from './styles'

import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import BtnLittle from 'components/BtnLittle'
import Pagination from 'components/Pagination'

import { Pack } from 'types/api'

type Props = {
  packs: Pack[]
}

type Page = { packsIDs: string[] }

const Carousel = ({ packs }: Props) => {
  const [pageLength, setPageLength] = useState(1)
  const [nav, setNav] = useState(0)
  const [translate, setTranslate] = useState<number>(0)
  const refItem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(translate)
  }, [translate])

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) setPageLength(1)
      if (window.innerWidth < 1024 && window.innerWidth >= 480) setPageLength(2)
      if (window.innerWidth < 1260 && window.innerWidth >= 1024)
        setPageLength(3)
      if (window.innerWidth >= 1260) setPageLength(4)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  })

  const moveCarousel = (dir: string | null) => {
    const el: HTMLDivElement | null = refItem.current
    let width: number | null = null
    if (el !== null) {
      width = el.offsetWidth
    }

    if (dir === 'left' && typeof width === 'number' && nav > 0) {
      setNav(nav - 1)
      setTranslate(translate + width)
    }

    if (
      dir === 'right' &&
      typeof width === 'number' &&
      nav < packs.length - pageLength
    ) {
      setNav(nav + 1)
      setTranslate(translate - width)
    }
  }

  const getPagination = useCallback(() => {
    const numOfPages = Math.ceil(packs.length / pageLength)
    const packsArr = [...packs]
    const pagesArr: Page[] = []
    // console.log('pageLength: ', pageLength)
    // console.log('packs.length: ', packs.length)
    // console.log('Math.ceil(packs.length): ', Math.ceil(packs.length))
    // console.log('numOfPages: ', numOfPages)

    for (let i = 0; i < numOfPages; i++) {
      // console.log('pagesArr 1')
      const page: Page = { packsIDs: [] }

      for (let x = 0; x < pageLength; x++) {
        // console.log('pagesArr 2')
        const item = packsArr.shift()
        if (item !== undefined) page.packsIDs.push(item.id)
      }
      pagesArr.push(page)
    }
    // console.log(pagesArr)
    return pagesArr
  }, [packs, pageLength])

  return (
    <>
      <S.Wrapper>
        <S.Window moving={translate}>
          {packs.map((p: Pack) => (
            <S.Item key={p.id} className={p.id} ref={refItem}>
              <S.H>{p.Name}</S.H>
              <S.Desc>{p.Description}</S.Desc>
              <S.H>R$ {getPackPrice(p)} / mês</S.H>

              <S.Benefits>
                <S.Attribute isChecked={true}>
                  Uso do Selo eureciclo nas embalagens do Selo eureciclo nas
                  embalagens
                </S.Attribute>
                <S.Attribute isChecked={true}>
                  Videos para seu consumidor sobre a parceria seu consumidor
                </S.Attribute>
                <S.Attribute isChecked={true}>
                  Infográfico para divulgar o investimento em reciclagem
                  divulgar o investimento
                </S.Attribute>
                <S.Attribute isChecked={false}>
                  Entrega de informações personalizadas para criação de seus
                  conteúdos
                </S.Attribute>
                <S.Attribute isChecked={false}>
                  Cases de Sucesso no nosso site sobre a parceria site sobre a
                  parceria
                </S.Attribute>
              </S.Benefits>

              <S.FlexCenter>
                <BtnLittle
                  as={`/packs/${replaceSpecialChars(p.Name)}`}
                  pathname={'/packs/[slug]'}
                  text={'Selecionar'}
                />
              </S.FlexCenter>
            </S.Item>
          ))}
        </S.Window>
      </S.Wrapper>
      <S.Wrapper>
        <Pagination
          getPagination={getPagination}
          moveCarousel={moveCarousel}
          length={packs.length - pageLength}
          nav={nav}
        />
      </S.Wrapper>
    </>
  )
}

export default Carousel
