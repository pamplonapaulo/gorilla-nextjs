import styled, { keyframes } from 'styled-components'

// Totally inspired in the great work from Imran Pardes:
// https://codepen.io/folaad/pen/YvmRpz

const color_anim = keyframes`
  0% {
      fill: #000;
  }
  50% {
      fill: #FBC638;
  }
  100% {
      fill: #000;
  }
`

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`

export const Span = styled.span`
  color: black;
  transform: skewX(15deg);
  transition: 0.5s;

  &&:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }
`

export const PathOne = styled.path`
  transition: 0.4s;
  transform: translateX(-60%);
`

export const PathTwo = styled.path`
  transition: 0.5s;
  transform: translateX(-30%);
`

export const PathThree = styled.path``

export const Cta = styled.a`
  background: #ef8321;
  color: white;
  box-shadow: 6px 6px 0 black;
  display: flex;
  font-weight: 800;
  font-size: 2rem;
  font-style: italic;
  font-size: 4rem;
  /* padding: 10px 45px 10px 45px; */
  padding: 10px 25px;

  /* padding: 10px 60px 10px 45px; */
  text-decoration: none;
  text-transform: uppercase;
  transition: 1s;
  transform: skewX(-15deg);

  &:focus {
    outline: none;
  }

  &:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #fbc638;
    padding: 10px 40px;

    ${Span} {
      margin-right: 15px;

      /* &&:nth-child(2) {
        margin-right: 45px;
        background: blue;
      } */
    }

    ${PathThree} {
      animation: ${color_anim} 1.5s infinite 0.4s;
    }

    ${PathOne} {
      transform: translateX(0%);
      animation: ${color_anim} 1.5s infinite 0.8s;
    }

    ${PathTwo} {
      transform: translateX(0%);
      animation: ${color_anim} 1.5s infinite 0.6s;
    }
  }
`
