import styled from 'styled-components'

export const TextBigger = styled.h1`
  color: #fbc822;
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  width: 100%;

  margin-bottom: 2rem;
  line-height: 1.5;

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 4rem;
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
      width: 50%;
    }
  }
`
