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
  font-style: italic;
  font-weight: 500;
  height: 70px;
  letter-spacing: 1px;
  padding: 1.3em 1.7em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.05s;
  width: 80px;
  font-weight: 600;
  position: absolute;
  overflow: hidden;
  z-index: 0;
  /* transform: translateX(-50%); */

  @media only screen and (min-width: 1024px) {
    font-size: 1.6rem;
    width: 190px;
    transition: all 0.2s ease-in-out;

    &&:before {
      position: absolute;
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
      background: rgba(0, 0, 0, 0);
      color: #2da650;
      border-color: #2da650;
      text-shadow: 0px 1px 1px transparent;

      &&:before {
        width: 100%;
      }
    }
  }
`
