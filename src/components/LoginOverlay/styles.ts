import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

export const Overlay = styled.div<{ height: string }>`
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  height: ${(p) => p.height};
  height: 100%;
  position: absolute;
  top: 0;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 70px);
    position: fixed;
    top: 70px;
    transform: none;
    width: 100%;
  }
`

export const PopUp = styled.div<{ height: string }>`
  align-items: center;
  align-self: center;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: #47311b;
  box-shadow: 0px 1px 8px #000;
  display: flex;
  flex-direction: column;
  height: calc(${(p) => p.height} - 90px);
  justify-content: space-between;
  margin: 10px 2.5vw 0;
  padding: 10px 10px 50px;
  top: 0;
  transition: opacity 0.2s;
  width: 95vw;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 160px);
    /* justify-content: space-between; */
    justify-content: center;
    margin: 0 40vw;
    padding: 30px;
    width: 20vw;
  }
`

export const Top = styled.div`
  height: 50%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`

export const Bottom = styled.div`
  height: 35%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    justify-content: space-evenly;
    height: 45%;
  }
`

export const H = styled.h1<{ breakSpaces?: boolean }>`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  line-height: 1.5;
  white-space: ${(p) => (p.breakSpaces ? 'break-spaces' : 'nowrap')};
  margin-bottom: 4rem;
`

export const HWrap = styled.h1`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  margin-top: 4rem;
  line-height: 2;
`

export const BtnBack = styled.div`
  align-self: baseline;
  z-index: 9;

  @media only screen and (min-width: 1024px) {
    align-self: auto;
    transform: unset;
  }
`

export const BtnsWrapper = styled.div<{ justifyContent: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: ${(p) => p.justifyContent};
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    margin: 0 40vw;
    padding: 30px;
    width: 20vw;
    transform: translateY(45px);
  }
`
