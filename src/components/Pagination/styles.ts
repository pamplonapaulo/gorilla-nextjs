import styled from 'styled-components'

export const Arrow = styled.span`
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  color: #fbc822;
  cursor: pointer;
  display: flex;
  font-weight: 400;
  justify-content: center;
  padding: 0;
  transition: ease-in 0.2s all;
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  white-space: nowrap;
  vertical-align: middle;

  height: 50px;
  width: 50px;
  font-size: 50px;
  line-height: 100%;
  font-family: monospace;

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
