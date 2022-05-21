import styled from 'styled-components'

export const Wrap = styled.div<{ height?: string; dangerMode?: boolean }>`
  width: 190px;
  display: flex;
  justify-content: center;

  height: unset;
  //transform: scale(0.65);
  transform: ${(p) => (p.dangerMode ? 'scale(1)' : 'scale(0.65)')};

  @media only screen and (min-width: 1024px) {
    height: ${(p) => (p.height ? p.height : '70px')};
    transform: scale(1);
  }
`

export const Btn = styled.button<{
  dangerMode?: boolean
  mobileInheritColor?: boolean
}>`
  background: rgba(0, 0, 0, 0.4);
  border: solid 1px;
  border-color: ${(p) => (p.dangerMode ? 'red' : '#fff')};
  border-radius: 0;
  box-shadow: 0px 1px 3px #000;
  border-color: ${(p) => (p.dangerMode ? 'red' : '#fff')};
  color: ${(p) =>
    p.dangerMode ? 'red' : p.mobileInheritColor ? 'inherit' : '#fff'};
  cursor: pointer;
  /* display: inline-block; */
  /* font-size: 1.3rem; */
  font-weight: 100;
  height: 50px;
  letter-spacing: 1px;
  overflow: hidden;
  /* padding: 1.3em 1.7em; */
  padding: 0;
  /* text-align: center; */
  text-decoration: none;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  transition: all 0.05s;
  transition: all 0.2s ease-in-out;
  width: 190px;
  z-index: 0;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    color: ${(p) => (p.dangerMode ? 'red' : '#fff')};
  }

  @media only screen and (min-width: 1024px) {
    display: block;
    font-size: 1.3rem;

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
      background: ${(p) => (p.dangerMode ? 'red' : '#ef8321')};
      color: #fbc822;
      border-color: #fbc822;
      text-shadow: 0px 1px 2px #000;
      transform: scale(1.1);
    }
  }
`
