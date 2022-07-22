import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  width: 100vw;

  form label {
    color: #fbc822 !important;
  }
`

export const Form = styled.form`
  background: rgba(0, 0, 0, 0.3);
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  padding: 40px;

  @media only screen and (max-width: 600px) {
    width: 80vw;
    min-width: initial;
  }
`

export const Message = styled.div`
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
`

export const Btn = styled.button`
  background: #2da650;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 0;
  border: 0;
  color: #000;
  cursor: pointer;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  width: 100%;
  text-transform: uppercase;

  &:hover {
    filter: contrast(115%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const Spinner = styled.div`
  border-radius: 50%;

  &::before {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    transform-origin: 10.4px 10.2px;
    animation: ${loading} 2s infinite ease 1.5s;
  }

  &::after {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    transform-origin: 0px 10.2px;
    animation: ${loading} 2s infinite ease;
  }

  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  transform: translateZ(0);
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const PayValue = styled.h1`
  display: flex;
  flex-direction: row;
  color: #fbc822;
  flex-direction: row;
  color: #fbc822;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;

  &:nth-of-type(1) {
    font-size: 2.5rem;
  }
  &:nth-of-type(3) {
    font-size: 3.5rem;
  }
`

// export const Loading = styled.img.attrs(() => ({
//   src: '/img/dots.svg',
//   alt: 'Carrregando...',
// }))`
//   width: 4rem;
// `
