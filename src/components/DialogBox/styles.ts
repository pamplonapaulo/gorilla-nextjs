import styled from 'styled-components'

export const Overlay = styled.div<{ isHidden: boolean; isDisplayed: boolean }>`
  position: fixed;
  /* backdrop-filter: blur(10px); */
  backdrop-filter: ${(p) => (p.isHidden ? 'blur(0px)' : 'blur(10px)')};
  background: ${(p) =>
    p.isHidden ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.1)'};
  width: 100vw;
  height: 100%;
  z-index: 99999;
  display: ${(p) => (p.isDisplayed ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  transition: all 0.4s;

  @media only screen and (min-width: 1024px) {
    top: 70px;
  }
`

export const Wrap = styled.div<{ isOff: boolean }>`
  margin: 0 auto;
  background: black;
  background: rgb(28, 19, 11);
  box-shadow: 0px 0px 1px rgb(255 255 255 / 75%);

  padding: 4rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  transform: translateY(-75px);
  opacity: ${(p) => (p.isOff ? '0' : '1')};
  transition: all 0.1s;

  height: calc(90vh - 70px);
  margin-top: 70px;
  width: 86%;

  @media only screen and (min-width: 1024px) {
    height: 700px;
    width: 700px;
  }
`

export const Txt = styled.h5<{ hasMark?: boolean }>`
  color: #fff;
  text-align: ${(p) => (p.hasMark ? 'left' : 'center')};
  margin-bottom: ${(p) => (p.hasMark ? 'none' : '10px')};
  margin-left: ${(p) => (p.hasMark ? 'none' : '-10px')};
  text-transform: ${(p) => (p.hasMark ? 'none' : 'uppercase')};
  line-height: 1.75;

  font-size: ${(p) => (p.hasMark ? '1.5rem' : '2rem')};
  font-weight: ${(p) => (p.hasMark ? 'normal' : '800')};
  font-style: ${(p) => (p.hasMark ? 'none' : 'italic')};

  &::before {
    content: '${(p) => (p.hasMark ? '\\2713' : '')}';
    margin-right: 10px;
    font-weight: 900;
    font-size: 13px;
    transform: translateY(-6px);
  }
`

export const FlexCenter = styled.div<{ isColumn?: boolean }>`
  align-self: ${(p) => (p.isColumn ? 'center' : 'unset')};
  display: flex;
  flex-direction: ${(p) => (p.isColumn ? 'column' : 'row')};
  justify-content: center;
  padding-bottom: 2rem;

  @media only screen and (min-width: 1024px) {
    padding: ${(p) => (p.isColumn ? '0 5rem 5rem' : '0')};
    width: ${(p) => (p.isColumn ? '75%' : 'unset')};
  }
`
