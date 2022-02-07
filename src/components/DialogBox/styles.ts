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
  width: 90%;
  height: 400px;
  padding: 4rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  transform: translateY(-75px);
  opacity: ${(p) => (p.isOff ? '0' : '1')};
  transition: all 0.1s;

  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`

export const Txt = styled.h5`
  color: #ef8321;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
`

export const Lista = styled.ul`
  flex-direction: column;
  /* background: green; */
  height: 200px;
  list-style: none;
  justify-content: space-evenly;
  display: flex;
`

export const Item = styled.li`
  color: #ef8321;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  text-align: center;
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
