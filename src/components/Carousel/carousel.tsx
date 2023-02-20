import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  MouseEvent,
} from 'react'

import { useQuery } from '@apollo/client'
import { GET_BENEFITS } from 'graphql/queries'
import Loader from 'components/Loader'

import * as S from './styles'

import { getPackPrice } from 'utils/getPackPrice'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import Benefits from 'components/Benefits'
import BtnLittle from 'components/BtnLittle'
import Pagination from 'components/Pagination'

import { Pack } from 'types/api'

type Props = {
  packs: Pack[]
}

const Carousel = ({ packs }: Props) => {
  const [pageLength, setPageLength] = useState(1)
  const [nav, setNav] = useState(0)
  const refItem = useRef<HTMLDivElement>(null)
  const refWindow = useRef<HTMLDivElement>(null)
  const [availHeight, setAvailHeight] = useState('100vh')
  const [mouseDown, setMouseDown] = useState<number | boolean>(false)

  const { loading, error, data } = useQuery(GET_BENEFITS)

  console.log('packs')
  console.log(packs)

  useEffect(() => {
    // setAvailHeight(screen.availHeight + 'px')
    setAvailHeight(window.innerHeight + 'px')

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
  }, [])

  const handleMouseDown = (e: MouseEvent) => {
    setMouseDown(e.pageX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (
      typeof mouseDown === 'number' &&
      refWindow.current !== null &&
      refWindow.current !== undefined
    ) {
      if (mouseDown - 70 > e.pageX) {
        scrollViaButton('right')
      }

      if (mouseDown < e.pageX - 70) {
        scrollViaButton('left')
      }
    }
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }

  const scrollViaButton = (dir: string) => {
    setMouseDown(false)
    const ref = refWindow.current
    const origin = typeof ref?.scrollLeft === 'number' ? ref?.scrollLeft : 0
    const item =
      typeof refItem?.current?.offsetWidth === 'number'
        ? refItem?.current?.offsetWidth
        : 0
    const next = dir === 'right' ? origin + item : origin - item

    refWindow.current?.scrollTo({
      top: 0,
      left: next,
      behavior: 'smooth',
    })
  }

  const handleScrollEvent = () => {
    const carouselScroll = refWindow.current?.scrollLeft
    const item = refItem?.current?.offsetWidth

    if (
      typeof carouselScroll === 'number' &&
      item &&
      carouselScroll % item === 0
    ) {
      setNav(carouselScroll / item)
    }
  }

  const getPagination = useCallback(() => {
    const pagination: number[] = []

    for (let i = 0; i < packs.length; i++) {
      pagination.push(parseInt(packs[i].id))
    }
    return pagination
  }, [packs])

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Erro no carregamento dos BENEFÍCIOS</p>

  return (
    <>
      <S.Wrapper>
        <S.Window
          onScroll={handleScrollEvent}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          ref={refWindow}
        >
          {packs.map((p: Pack) => {
            return (
              <S.Item
                key={p.id}
                className={p.id}
                ref={refItem}
                availHeight={availHeight}
              >
                <S.H>{p.attributes.Name}</S.H>
                <S.Desc>{p.attributes.Description}</S.Desc>
                <S.H>R$ {getPackPrice(p)} / mês</S.H>
                <Benefits
                  packBenefits={p.attributes.Benefits[0].benefits.data}
                  generalBenefits={data.benefits.data}
                  isHome={true}
                />
                <S.FlexCenter>
                  <BtnLittle
                    as={`/packs/${
                      p.id + '-' + replaceSpecialChars(p.attributes.Name)
                    }`}
                    pathname={'/packs/[slug]'}
                    text={'Selecionar'}
                  />
                </S.FlexCenter>
              </S.Item>
            )
          })}
        </S.Window>
      </S.Wrapper>
      <S.Wrapper>
        <Pagination
          getPagination={getPagination}
          moveCarousel={scrollViaButton}
          total={packs.length}
          length={packs.length - pageLength}
          nav={nav}
          pageLength={pageLength}
        />
      </S.Wrapper>
    </>
  )
}

export default Carousel
