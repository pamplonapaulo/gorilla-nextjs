import styled from 'styled-components'

export const Arrow = styled.span<{ isVisible: boolean }>`
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  color: #fbc822;
  cursor: ${(p) => (p.isVisible ? 'pointer' : 'default')};
  display: flex;
  font-family: monospace;
  font-weight: 400;
  font-size: 50px;
  height: 50px;
  justify-content: center;
  line-height: 100%;
  opacity: ${(p) => (p.isVisible ? '1' : '0')};
  padding: 0;
  transition: ease-in 0.2s all;
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  white-space: nowrap;
  width: 50px;
  vertical-align: middle;

  &&:nth-of-type(1) {
    margin-right: 3rem;

    &::after {
      content: '\\00ab';
      transform: translateY(-6px);
    }
  }

  &&:last-of-type {
    margin-left: 3rem;

    &::after {
      content: '\\00bb';
      transform: translateY(-6px);
    }
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      color: #ef8321;
      transform: scale(1.3);
    }
  }
`

export const DotsWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const Dot = styled.span`
  background: #ccc;
  border-radius: 7.5px;
  box-shadow: 0px 1px 4px #000;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 10px;
  transition: ease-in 0.2s all;

  @media only screen and (min-width: 1024px) {
    &:hover {
      background: #fbc822;
      transform: scale(1.3);
    }
  }
`
