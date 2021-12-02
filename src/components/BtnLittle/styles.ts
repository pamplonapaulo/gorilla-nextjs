import styled from 'styled-components'

export const Wrap = styled.div`
  width: 80px;
  height: 70px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    width: 190px;
  }
`

export const Btn = styled.button`
  background: rgba(0, 0, 0, 0.4);
  border: solid 1px #fff;
  border-radius: 0;
  box-shadow: 0px 1px 3px #000;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 50px;
  letter-spacing: 1px;
  padding: 1.3em 1.7em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.05s;
  width: 80px;
  font-weight: 100;
  text-shadow: 0px 1px 2px #000;
  overflow: hidden;
  z-index: 0;

  @media only screen and (min-width: 1024px) {
    font-size: 1.3rem;
    width: 190px;
    transition: all 0.2s ease-in-out;

    &&:before {
      width: 0%;
      height: 100%;
      content: '';
      margin: auto;
      top: 0;
      left: 0;
      background: #fbc822;
      transition: width 0.1s ease-in-out;
      z-index: -1;
    }

    &:hover {
      /* background: rgba(0, 0, 0, 1); */
      background: #ef8321;
      color: #fbc822;
      border-color: #fbc822;
      text-shadow: 0px 1px 2px #000;
      transform: scale(1.1);
    }
  }
`
