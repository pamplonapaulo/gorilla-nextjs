import styled from 'styled-components'

export const T = styled.h1<{ makeRoomToTopPanel: boolean }>`
  color: #fbc822;
  font-size: 1.75rem;
  margin: 30px 0;
  text-transform: uppercase;

  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 5px #000;
  transition: 0.1s ease-in-out all;

  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
    margin: 70px 0;
    margin-top: ${(p) => (p.makeRoomToTopPanel ? '300px' : '70px')};
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;
  padding-top: 40px;

  @media only screen and (min-width: 1024px) {
    max-width: 1159px;
    flex-direction: row;
    padding-top: 0;
  }
`

export const H = styled.h1`
  margin-bottom: 2.5px;
  text-align: center;
  font-weight: 600;
  font-size: 2.3rem;
  text-transform: uppercase;
  background: rgba(187, 255, 187, 0.85);
  border-radius: 50%;
  box-shadow: 0px 1px 8px #000;
  color: #47311b;
  float: right;
  height: 75px;
  margin-top: -80px;
  padding-top: 25px;
  position: relative;
  width: 75px;
  opacity: 1;
  transition: all 0.2s;
  z-index: 1;
  transform: scale(0.75);
  transform-origin: bottom;

  @media only screen and (min-width: 1024px) {
    font-size: 1.7rem;
    transform-origin: unset;
    transform: translateX(-20px);
  }
`

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 8;
  transform: scale(1.25);
  transform-origin: top;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    transform: unset;
  }
`

export const Item = styled.div`
  margin: 0 0 75px;
  text-align: center;
  max-width: 300px;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 150px;
  }
`

export const Sum = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  transform: translateY(-100%);
  display: flex;
  display: ${(p) => (p.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  h1 {
    background: rgba(255, 255, 255, 0.85);
    border: 3px #000 solid;
    border-radius: 50%;
    box-shadow: 0px 1px 8px #000;
    color: #000;
    float: right;
    font-weight: 600;
    padding: 0;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    width: 60px;
    height: 60px;

    @media only screen and (min-width: 1024px) {
      font-size: 2.25rem;
      width: 125px;
      height: 125px;
    }
  }
`
