import styled from 'styled-components'

export const Arrow = styled.span<{ isVisible: boolean }>`
  align-items: center;
  background: #402c1c;
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
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  transform: scale(0.5);
  transition: ease-in 0.2s all;
  white-space: nowrap;
  width: 50px;
  vertical-align: middle;

  &&:nth-of-type(1) {
    margin-right: 3rem;
    transform-origin: left;

    &::after {
      content: '\\00ab';
      transform: translateY(-6px);
    }
  }

  &&:last-of-type {
    margin-left: 3rem;
    transform-origin: right;

    &::after {
      content: '\\00bb';
      transform: translateY(-6px);
    }
  }

  @media only screen and (min-width: 1024px) {
    background: rgba(255, 255, 255, 0.3);
    transform-origin: center !important;
    transform: scale(1);

    &:hover {
      color: #ef8321;
      background: #fbc822;
      transform: scale(1.3);
    }
  }
`

export const DotsWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const Dot = styled.span<{ isCurrent: boolean }>`
  background: ${(p) => (p.isCurrent ? '#2da650' : '#ccc')};
  border-radius: 7.5px;
  box-shadow: 0px 1px 4px #000;
  width: 5px;
  height: 5px;
  margin: 7px;
  transition: ease-in 0.2s all;

  @media only screen and (min-width: 480px) {
    width: 8px;
    height: 8px;
    margin: 8px;
  }

  @media only screen and (min-width: 768px) {
    width: 12.5px;
    height: 12.5px;
    margin: 9px;
  }

  @media only screen and (min-width: 1024px) {
    width: 15px;
    height: 15px;
    margin: 10px;
  }
`
