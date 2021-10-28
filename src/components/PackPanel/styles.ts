import styled from 'styled-components'

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

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 3;
  justify-content: space-between;
  flex-direction: column;

  &&:nth-of-type(1) {
    max-width: 625px;
  }

  &&:nth-of-type(4) {
    justify-content: end;
    align-items: end;
  }
`

export const Text = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin-bottom: 2rem;
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
  /* background: blue; */
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
  /* background: yellow; */
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
  /* margin-left: 15px; */
  background: rgba(255, 255, 255, 0.85);
  border: 1px #000 solid;
  border-radius: 50%;
  /* box-shadow: 0px 1px 0px #000; */
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
