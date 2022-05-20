import styled from 'styled-components'

export const Overlay = styled.div<{ isHidden: boolean; isDisplayed: boolean }>`
  position: fixed;
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
  background: rgb(28, 19, 11);
  box-shadow: 0px 0px 1px rgb(255 255 255 / 75%);
  /* display: block; */
  flex-direction: column;
  height: calc(90vh - 70px);
  /* justify-content: space-around; */
  margin: 70px auto 0;
  opacity: ${(p) => (p.isOff ? '0' : '1')};
  padding: 0;
  transform: translateY(-75px);
  transition: all 0.1s;
  width: 86%;

  display: flex;
  justify-content: space-evenly;

  @media only screen and (min-width: 1024px) {
    //display: flex;
    height: 700px;
    justify-content: space-between;
    padding: 4rem;
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

  font-size: ${(p) => (p.hasMark ? '1.25rem' : '2rem')};
  font-weight: ${(p) => (p.hasMark ? 'normal' : '800')};
  font-style: ${(p) => (p.hasMark ? 'none' : 'italic')};

  &:nth-of-type(1) {
    margin-left: 0;
    font-size: 1.6rem;
  }

  &::before {
    content: '${(p) => (p.hasMark ? '\\2713' : '')}';
    display: ${(p) => (p.hasMark ? 'inline' : 'none')};
    margin-right: 10px;
    font-weight: 900;
    font-size: 13px;
    transform: translateY(-6px);
  }

  @media only screen and (min-width: 1024px) {
    font-size: ${(p) => (p.hasMark ? '1.5rem' : '2rem')};
  }
`

export const FlexCenter = styled.div<{ isColumn?: boolean }>`
  align-self: ${(p) => (p.isColumn ? 'center' : 'unset')};
  bottom: ${(p) => (p.isColumn ? 'unset' : '1rem')};
  display: flex;
  flex-direction: ${(p) => (p.isColumn ? 'column' : 'row')};
  justify-content: center;
  padding: ${(p) => (p.isColumn ? '0 3rem 2rem' : '0')};
  position: ${(p) => (p.isColumn ? 'unset' : 'absolute')};
  width: ${(p) => (p.isColumn ? 'unset' : '100%')};

  @media only screen and (min-width: 1024px) {
    bottom: unset;
    padding: ${(p) => (p.isColumn ? '6rem 5rem 0' : '0')};
    position: relative;
    width: ${(p) => (p.isColumn ? '75%' : 'unset')};
  }
`

export const LogoWrapper = styled.div`
  align-self: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding-bottom: 2rem; */
  padding-top: 1rem;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    width: unset;
  }
`
