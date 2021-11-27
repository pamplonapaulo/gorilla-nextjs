import styled, { keyframes } from 'styled-components'

export const PackPanel = styled.div<{ isVisible: boolean }>`
  background: rgba(28, 19, 11, 0.95);
  box-shadow: 0px 1px 8px #000;
  color: #fbc822;
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 9rem 3rem 3rem;
  position: fixed;
  top: 0;
  height: 300px;
  z-index: 9;
  transform: translateY(${(p) => (p.isVisible ? '0' : '-100%')});
  transition: 0.1s ease-in-out all;
`

const bounce = keyframes`
  0% { transform: scale(1,1) translateY(-115%); }
  5% { transform: scale(1,1) translateY(-115%); }
  9% { transform: scale(1.05,0.95) translateY(0%); }
  10% { transform: scale(1.05,0.95) translateY(1%); }
  15% { transform: scale(0.9,1.1) translateY(-55%); }
  15% { transform: scale(0.9,1.1) translateY(-55%); }
  19% { transform: translateY(0%); }
  20% { transform: translateY(1%); }
  25% { transform: scale(1,1) translateY(-40%); }
  25% { transform: scale(1,1) translateY(-40%); }
  29% { transform: translateY(0%); }
  30% { transform: translateY(1%); }
  35% { transform: scale(1,1) translateY(-25%); }
  35% { transform: scale(1,1) translateY(-25%); }
  39% { transform: translateY(0%); }
  40% { transform: translateY(1%); }
  45% { transform: scale(1,1) translateY(-10%); }
  45% { transform: scale(1,1) translateY(-10%); }
  49% { transform: translateY(0%); }
  50% { transform: translateY(1%); }
  100% { transform: translateY(0%); }
`

const hide = keyframes`
  0% { transform: translateY(0%); }
  100% { transform: scale(1,1) translateY(-115%); }
`

export const Content = styled.div<{ isVisible: boolean }>`
  animation: ${(p) => (p.isVisible ? bounce : hide)} forwards;
  animation-duration: ${(p) => (p.isVisible ? '2.5s' : '0.8s')};
  animation-play-state: ${(p) => (p.isVisible ? 'running' : 'running')};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  justify-content: space-between;
  transform-origin: bottom;
  transform: translateY(-115%);

  &&:nth-of-type(1) {
    max-width: 625px;
    animation-delay: 0.5¾s;
  }

  &&:nth-of-type(2) {
    max-width: 192.44px;
    animation-delay: 0.5s;
    z-index: 2;
  }

  &&:nth-of-type(3) {
    max-width: 276.58px;
    z-index: 1;
  }

  &&:nth-of-type(4) {
    max-width: 190px;
  }
`

export const Text = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin-bottom: 2rem;

  span {
    font-size: 15px;
    margin: 0 3px 1px 0;
    text-transform: lowercase;
  }

  &&:nth-of-type(2) {
    color: #fff;
    white-space: nowrap;
  }
`

export const HoverContent = styled.span`
  background: #fff;
  color: #000;
  display: none;
  height: 35px;
  width: 170px;
  font-size: 2.8rem;
  font-style: italic;
  font-weight: 600;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translate(80%, -5px);
`

export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  @media only screen and (min-width: 1024px) {
    &:hover {
      ${HoverContent} {
        display: block;
      }
    }
  }
`

export const Snack = styled.div`
  height: 120px;
  margin-right: 25px;
`

export const Icon = styled.img`
  display: block;
  height: auto;
  width: 50px;

  @media only screen and (min-width: 1024px) {
    width: 75px;
    transition: ease-in-out 0.3s all;
  }
`

export const Quantity = styled.h1`
  text-align: center;
  background: red;
  border-radius: 15px;
  font-size: 19px;
  font-weight: 300;
  height: 40px;
  width: 40px;
  transform: translateY(-75%);
  background: rgba(255, 255, 255, 0.85);
  border: 1px #000 solid;
  border-radius: 50%;
  color: #000;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    margin: 0 3px 1px 0;
  }
`
