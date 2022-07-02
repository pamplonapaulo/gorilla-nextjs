import styled from 'styled-components'

export const Input = styled.input<{ isValid: boolean }>`
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 0px;
  outline-color: white;
  outline-width: 1px;
  background: ${(p) =>
    p.isValid ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  color: ${(p) => (p.isValid ? '#2da650' : '#FF0000')};
  padding-left: 10px;
  font-weight: 100;
  letter-spacing: 1.3px;
  font-size: 16px;
  font-family: sans-serif;
  transition: 0.2s all;
  margin: 0 0 2rem;
  width: 100%;
  letter-spacing: 1.3px;
  font-size: 16px;
  outline: none;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    margin: 0 0 4rem;
  }

  &::-webkit-input-placeholder {
    border-radius: 0px;
    letter-spacing: 1.5px;
    font-weight: 400;
    font-size: 11px;
    text-transform: uppercase;
    transition: 0.2s all;
    letter-spacing: 5px;
    color: ${(p) => (p.isValid ? 'rgb(117, 117, 117)' : '#FF0000')};
  }

  &:focus {
    color: ${(p) => (p.isValid ? '#2da650' : '#FF0000')};
    background: rgba(250, 203, 55, 0.3);
    border: solid 1px #2da650;
    box-shadow: 10px 1px 8px #2da650;
    border-radius: 0px;
    outline: none;

    &::-webkit-input-placeholder {
      border-radius: 0px;
      color: transparent;
    }
  }

  &:-webkit-autofill {
    border: solid 1px #facb37;
    border-radius: 0px;
    box-shadow: 0px 0px 1000px #facb37 inset;
    -webkit-box-shadow: 0px 0px 1000px #facb37 inset;
    filter: none;
    color: ${(p) =>
      p.isValid ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
    outline: none;
  }

  &:focus-visible {
    background: rgba(250, 203, 55, 0.3);
    border-radius: 0px;
    box-shadow: 0px 0px 5px #ef8321 inset;
    outline: none;
  }
  &:-internal-autofill-selected {
    background-color: red;
  }
`

export const TextBigger = styled.p`
  cursor: default;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 2;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.3rem;
  margin: 15px 0;
  text-transform: uppercase;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 30px;
  }
`

export const FlexCenter = styled.div<{ noOrder?: boolean }>`
  border-left: solid transparent 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  overflow: visible;
  text-align: left;
  width: ${(p) => (p.noOrder ? 'auto' : 'calc(100% - 40px)')};
  margin: ${(p) => (p.noOrder ? '50px 0 0' : '50px 0 2rem')};
  padding: ${(p) => (p.noOrder ? '0' : '0 10px')};
  align-items: ${(p) => (p.noOrder ? 'center' : 'unset')};

  @media only screen and (min-width: 1024px) {
    margin: ${(p) => (p.noOrder ? '0' : '100px 0 2rem -32px')};
    padding: ${(p) => (p.noOrder ? '0' : '0 10px 0 32px')};
    width: ${(p) => (p.noOrder ? 'auto' : '900px')};
  }

  @media only screen and (min-width: 1260px) {
    width: ${(p) => (p.noOrder ? 'auto' : '1150px')};
  }

  @media only screen and (min-width: 1300px) {
    width: ${(p) => (p.noOrder ? 'auto' : '1260px')};
  }
`

export const Content = styled.div<{ noOrder?: boolean }>`
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(28, 19, 11, 0.65);
  border: 1px solid #000;
  box-shadow: 0px 1px 3px #000;
  display: ${(p) => (p.noOrder ? 'table' : 'flex')};
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  height: calc(100% - 7.5vw - 80px);
  justify-content: center;
  width: auto;
  margin: 0;
  padding: ${(p) => (p.noOrder ? '30px' : '10px')};
  text-align: center;
  transform-origin: bottom;
  transform: translateY(0%);

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    height: unset;
    margin: unset;
    padding: ${(p) => (p.noOrder ? '30px' : '30px 30px 23px')};
    text-align: unset;
    flex-flow: row nowrap;
    overflow-x: scroll;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 7px !important;
    border: 1px solid transparent;
    margin-bottom: 3px !important;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border: 1px solid transparent;
    height: 2px !important;
    width: 2px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: #fbc822;
    outline: none !important;
    width: 1px !important;
    height: 2px !important;
    width: 2px !important;
    margin: 1px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.01);
    height: 2px !important;
    width: 2px !important;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    ${Content} {
      width: 100%;
    }
  }
`

export const Row = styled.div<{ redirect?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => (p.redirect ? 'space-evenly' : 'space-between')};
  width: ${(p) => (p.redirect ? '100%' : 'unset')};

  &:nth-of-type(1) {
    ${Column} {
      &:nth-of-type(2) {
        margin-left: 30px;
      }
    }
  }
`
