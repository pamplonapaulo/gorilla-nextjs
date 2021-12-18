import styled, { keyframes } from 'styled-components'

type ContentType = {
  isVisible: boolean
  showOnMobile?: boolean
}

type ActionBtnType = {
  switchContent: boolean
  selfCentered?: boolean
  isHidden?: boolean
  isDeactivated?: boolean
  shouldPulse?: boolean
}

const pulse = keyframes`
	0% {
		opacity: 0.5;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
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

export const UnderLimitMessage = styled.h1<{ isVisible: boolean }>`
  font-size: 1rem;
  margin: 15px;
  width: 104px;
  font-weight: 300;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  line-height: 1.7;
`

export const SpanMessage = styled.span<{ gotMinimumValue: boolean }>`
  animation: 1s infinite;
  animation-name: ${(p) => (p.gotMinimumValue ? 'none' : pulse)};
  color: ${(p) => (p.gotMinimumValue ? '#2da650' : '#fbc822')};

  &&::after {
    content: '${(p) =>
      p.gotMinimumValue
        ? 'Agora avance ou adicione mais.'
        : 'Selecione mais para poder avançar!'}';
  }
`

export const MobileBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const ActionBtn = styled.button<ActionBtnType>`
  background: rgba(0, 0, 0, 0.4);
  border: solid 1px #fff;
  border-radius: 0;
  box-shadow: 0px 1px 3px #000;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  height: 70px;
  letter-spacing: 1px;
  /* padding: 1.3em 1.7em; */
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 80px;
  font-weight: 600;
  /* position: absolute; */
  position: relative;

  overflow: hidden;
  z-index: 0;

  width: 135px;
  /* margin: 5px 20%; */
  height: 50px;

  display: flex;
  flex-direction: ${(p) => (p.switchContent ? 'row-reverse' : 'row')};
  transition: 0.2s all;
  justify-content: space-around;
  /* margin: 15px calc(calc(100% - 135px) / 2); */
  width: calc(50% - 15px - 7.5px);
  justify-content: space-evenly;
  padding: 0;
  opacity: ${(p) => (p.isDeactivated ? '0.3' : '1')};

  &&:nth-of-type(1) {
    margin: 15px auto 15px 15px;
    display: ${(p) => (p.isHidden ? 'none' : 'flex')};
  }

  &&:nth-of-type(2) {
    margin: ${(p) =>
      p.selfCentered ? '15px auto 15px auto' : '15px 15px 15px auto'};
    animation: 1s infinite;
    animation-name: ${(p) => (p.shouldPulse ? pulse : 'none')};
  }

  @media only screen and (min-width: 1024px) {
    display: none !important;
  }
`

export const BtnText = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-style: normal;
`

export const Text = styled.h1<{ shouldPulse: boolean }>`
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin-bottom: 2rem;

  @media only screen and (min-width: 1024px) {
    animation: 1s infinite;
    animation-name: ${(p) => (p.shouldPulse ? pulse : 'none')};

    &&:first-child {
      &&::after {
        content: ':';
      }
    }
  }

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

export const Content = styled.div<ContentType>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  transform-origin: bottom;
  transform: translateY(0%);

  height: calc(100% - 7.5vw - 80px);
  /* margin: 80px auto 7.5vw 7.5vw; */

  width: auto;
  margin: 0 15px;
  justify-content: start;

  @media only screen and (min-width: 1024px) {
    height: unset;
    margin: unset;
    justify-content: space-between;
    transform: translateY(-115%);
    animation: ${(p) => (p.isVisible ? bounce : hide)} forwards;
    animation-duration: ${(p) => (p.isVisible ? '2.5s' : '0.8s')};
    animation-play-state: ${(p) => (p.isVisible ? 'running' : 'running')};
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  display: ${(p) => (p.showOnMobile ? 'flex' : 'none')};

  &&:nth-of-type(2) {
    display: none;

    @media only screen and (min-width: 1024px) {
      display: flex;
      max-width: 625px;
      animation-delay: 0.5s;
    }
  }

  &&:nth-of-type(3) {
    animation-delay: 0.5s;
    z-index: 2;

    @media only screen and (min-width: 1024px) {
      max-width: 192.44px;
      display: flex;
    }
  }

  &&:nth-of-type(4) {
    z-index: 1;

    @media only screen and (min-width: 1024px) {
      max-width: 276.58px;
      display: flex;
    }
  }

  &&:nth-of-type(5) {
    @media only screen and (min-width: 1024px) {
      max-width: 190px;
      display: flex;
    }
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

  /* &&:nth-child(odd) {
    background: blue;
    color: yellow;
  } */

  @media only screen and (min-width: 1024px) {
    &:hover {
      ${HoverContent} {
        display: block;
      }
    }
  }
`

export const PackPanel = styled.div<{
  isVisible: boolean
  showOnMobile: boolean
}>`
  background: rgba(28, 19, 11, 0.95);
  box-shadow: 0px 1px 8px #000;
  color: #fbc822;
  display: flex;

  flex-direction: column;

  position: fixed;
  top: 70px;
  z-index: 9;
  transform: translateY(${(p) => (p.isVisible ? '0' : '-100%')});
  transition: 0.1s ease-in-out all;

  padding: 0;
  /* height: 80px; */
  height: ${(p) => (p.showOnMobile ? '50vh' : '80px')};
  width: 85%;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    top: 0;
    height: 300px;
    width: 80%;
    padding: 9rem 3rem 3rem;
  }
`
