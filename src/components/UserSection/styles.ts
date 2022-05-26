import styled from 'styled-components'

export const Container = styled.div`
  background: #2da650;
  box-shadow: 0px 7px 5px -8px #000;
  padding: 0 20px;
  width: 200px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    height: 70px;
    padding: 0;
  }
`

export const Hello = styled.h1`
  position: absolute;
  font-size: 11px;
  bottom: 0;
  white-space: nowrap;
  font-weight: 300;
  color: rgb(250, 203, 55);
  min-width: fit-content;
  cursor: pointer;

  color: #fbc822;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
  font-size: 16px;
  transform: translateY(-10px);
  z-index: 10;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 125px;
  }
`

// export const OnBag = styled.h1`
//   align-items: center;
//   background: #facb37;
//   border-radius: 50%;
//   bottom: 0;
//   color: red;
//   cursor: default;
//   display: flex;
//   font-size: 11px;
//   font-weight: 700;
//   height: 22.5px;
//   justify-content: center;
//   padding: 3px;
//   position: absolute;
//   transform: translate(calc(-100% + 40px), -25%);
//   white-space: nowrap;
//   width: 22.5px;
// `

export const BtnWrapper = styled.div`
  display: flex;
`

export const DropDown = styled.nav`
  background: #2da650;
  box-shadow: 0px 1px 8px #000;
  color: #fbc822;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 0px 1px 4px #000;
  font-size: 16px;
  height: 250px;
  justify-content: flex-start;
  margin: 0 10px 0 5px;
  padding: 70px 0 0;
  position: absolute;
  width: 180px;
  right: 0;
  text-align: left;
  transition: 0.2s all;
  transform: translateY(-100%);
  z-index: -1;

  &:hover {
    transform: translateY(0%);
  }

  span {
    cursor: pointer;
    display: flex;
    height: 60px;
    padding: 17px 15px;
    transition: 0.2s all;
    width: 100%;

    svg {
      filter: drop-shadow(0px 1px 4px #000);
      margin-right: 15px;
    }

    p {
      /* border-bottom: 2px solid;
      border-color: transparent; */
      line-height: 1.5;
      transition: 0.2s all;
    }

    &:hover {
      /* color: #ef8321; */
      background: #47311b;

      p {
        border-color: #ef8321;
        /* box-shadow: 0 1px 0px 0px rgb(0 0 0 / 25%); */
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 180px;
    height: 250px;
  }
`

export const Wrap = styled.div<{ isVisible?: boolean }>`
  float: right;
  height: 70px;
  display: flex;
  justify-content: center;
  color: ${(p) => (p.isVisible ? '#facb37' : '#FF0000')};
  cursor: pointer;

  & + ${DropDown} {
    transform: ${(p) => (p.isVisible ? 'translateY(0%)' : 'translateY(-100%)')};
  }

  @media only screen and (min-width: 1024px) {
    width: 125px;
    height: 70px;

    &:hover {
      & + ${DropDown} {
        transform: translateY(0%);
      }
    }
  }
`
