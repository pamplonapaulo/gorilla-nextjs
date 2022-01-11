import styled from 'styled-components'

export const NutritionFacts = styled.div`
  background: #fff;
  transform: translateY(-100%);
  opacity: 0;
  text-align: left;
  border: 3px solid #fff;
  box-shadow: inset 0 0 0 2px #000;
  padding: 8px 7px;
  position: absolute;
  transition: all 0.2;
  z-index: 2;

  @media only screen and (min-width: 1024px) {
    height: 344.34px;
    width: 250px;
  }
`

export const T = styled.p`
  font-size: 3rem;
  font-weight: bolder;
  padding-bottom: 4px;
  transform: scale(1, 1.3);
`

export const P = styled.p`
  border-bottom: 2px solid #000;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 0;

  &&:nth-of-type(2) {
    border-bottom: 7px solid #000;
    padding-top: 0;
  }

  &&:last-of-type {
    border-bottom: none;
  }
`

export const S = styled.span`
  background: transparent;
`

export const Span = styled.span<{ widthByLength?: number }>`
  color: #fbc822;
  font-size: 6rem;
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 60px;

  @media only screen and (min-width: 1024px) {
    font-size: 6rem;
    max-height: unset;
  }

  &&:nth-of-type(1) {
    background: rgb(28, 19, 11);
    color: #fbc822;
    text-shadow: 0px 1px 4px #47311b;
    min-width: ${(p) =>
      p.widthByLength && p.widthByLength > 1 ? '100px' : '70px'};
    text-align: center;
  }

  &&:nth-of-type(2) {
    font-size: 1.75rem;
    color: rgb(28, 19, 11);
    text-shadow: 1px 1px 0px #fbc822;
    font-weight: 700;
    padding: 5px;
  }

  &&:nth-of-type(3) {
    font-size: 3rem;
    color: rgb(28, 19, 11);
    text-shadow: 1px 1px 0px #fbc822;
    font-weight: 700;
    padding-left: 0;
    transform: translate(-92.31px, 75%);
    min-width: 100%;

    @media only screen and (min-width: 1024px) {
      font-size: 3.5rem;
      transform: unset;
      min-width: unset;
      width: 250px;
    }
  }
`

export const H = styled.h1`
  margin-bottom: 2.5px;
  text-align: center;
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 5px;
  text-transform: uppercase;
  color: rgb(28, 19, 11);
  text-align: left;
  flex-direction: row;
  display: flex;

  ${Span} {
    padding: 10px;
  }

  &&:nth-of-type(1) {
    font-style: italic;
    margin-top: -30px;
    position: absolute;
    width: 145px;

    @media only screen and (min-width: 1024px) {
      font-size: 3rem;
      width: 250px;
    }
  }
`

type MargimBottom = {
  margimBottom?: boolean
}

export const Item = styled.div<MargimBottom>`
  margin: 0 0 50px;
  margin-bottom: ${(p) => (p.margimBottom ? '0px' : '50px')};
  text-align: center;
  max-width: 300px;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 150px;
    margin-bottom: ${(p) => (p.margimBottom ? '0px' : '150px')};
    /* box-shadow: 0 0 8px #000; */

    &:hover {
      ${NutritionFacts} {
        opacity: 1;
      }

      ${H} {
        opacity: 0;
      }
    }
  }
`

export const ImgComp = styled.img`
  display: block;
  height: auto;
  max-width: 145px;
  width: 145px;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
    width: 250px;
  }
`
