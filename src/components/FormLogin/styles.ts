import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

export const Container = styled.div`
  padding: 0;
  z-index: 9;
  padding: 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  transform: translateX(70%);
  width: 90px;

  @media only screen and (min-width: 1024px) {
    transform: translateX(0%);
    width: 125px;
    height: 70px;
    padding: 5px;
  }
`

export const Overlay = styled.div`
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: rgba(0, 0, 0, 0.85);
  height: calc(100% - 70px);
  margin: 70px 0 0;
  position: fixed;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 0;

  @media only screen and (min-width: 1024px) {
    transform: translateX(-5vw);
  }
`

export const Form = styled.form`
  width: 100%;
  padding-top: 5rem;
`

export const Submit = styled.button`
  background: #2da650;
  color: #000f08;
`

export const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: none;
  padding: 20% 0 10%;

  @media only screen and (min-width: 1024px) {
    padding: 10% 0;
  }
`

export const Legend = styled.legend`
  color: #facb37;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(250%);
  transform: translateY(100%);
  /* position: absolute; */
  top: 0;
  width: calc(100% - 40px);

  @media only screen and (min-width: 1024px) {
    position: relative;
    transform: translateY(-100%);
  }
`

export const Input = styled.input<{ isValid: boolean }>`
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 0px;
  margin: 0 12.5% 3rem;
  outline-color: white;
  outline-width: 1px;
  background: ${(p) =>
    p.isValid ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  color: ${(p) => (p.isValid ? '#facb37' : '#FF0000')};
  padding-left: 10px;
  font-weight: 100;
  letter-spacing: 1.3px;
  font-size: 16px;
  font-family: sans-serif;
  transition: 0.2s all;
  margin: 0 0 1rem;
  width: 100%;
  letter-spacing: 1.3px;
  font-size: 16px;

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
    color: #ef8321;
    background: #facb37;
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
    background: #facb37;
    border-radius: 0px;
    box-shadow: 0px 0px 5px #ef8321 inset;
    outline: none;
  }
  &:-internal-autofill-selected {
    background-color: red;
  }
`

export const Forgot = styled.a`
  color: #ccc;
  cursor: pointer;
  font-weight: 100;
  letter-spacing: 1.5px;
  opacity: 0.75;
  text-align: right;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #facb37;
    opacity: 1;
    text-decoration: underline;
  }
`

export const Loading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Carrregando...',
}))`
  width: 4rem;
`
