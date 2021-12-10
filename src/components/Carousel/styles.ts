import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: calc(100vw - 50px);

  @media only screen and (min-width: 320px) {
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: 470px;
  }

  @media only screen and (min-width: 600px) {
    width: 520px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
  }

  @media only screen and (min-width: 1024px) {
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }

  &&:nth-of-type(2) {
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    overflow: visible;
  }
`

export const Window = styled.div<{ moving: number }>`
  display: flex;
  flex-direction: row;
  transition: transform 0.2s ease-in;
  transform: ${(p) => 'translateX(' + p.moving + 'px)'};
`

export const Item = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 550px;
  justify-content: space-around;
  padding: 20px 10px 10px;
  width: calc(100vw - 50px);

  &&:nth-child(even) {
    background: rgba(28, 19, 11, 0.9);
  }

  &&:nth-child(odd) {
    background: rgba(45, 166, 80, 0.9);
  }

  @media only screen and (min-width: 320px) {
    width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: calc(470px / 2);
  }

  @media only screen and (min-width: 600px) {
    width: calc(520px / 2);
  }

  @media only screen and (min-width: 768px) {
    width: calc(600px / 2);
  }

  @media only screen and (min-width: 1024px) {
    width: calc(900px / 3);
  }

  @media only screen and (min-width: 1260px) {
    width: calc(1150px / 4);
  }

  @media only screen and (min-width: 1300px) {
    width: calc(1260px / 4);
  }
`

export const H = styled.h1`
  color: #ef8321;
  font-weight: 600;
  font-size: 1.4rem;
  text-align: center;
  text-shadow: 0px 1px 2px #000;
  text-transform: uppercase;
  font-size: 3rem;

  &&:nth-of-type(2) {
    @media only screen and (min-width: 1024px) {
      font-size: 2.3rem;
    }
  }
`

export const Desc = styled.p`
  color: #ef8321;
  font-weight: 600;
  font-size: 16px;
  margin: 10px;
  text-shadow: 0px 1px 2px #000;
  text-align: center;
`

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 7.25px;
`

export const Attribute = styled.li<{ isChecked: boolean }>`
  color: ${(p) => (p.isChecked ? '#fbc822' : '#ccc')};
  list-style-type: none;
  font-size: 13px;
  line-height: 1.75;
  text-align: left;
  text-shadow: 0px 1px 2px #000;

  &::before {
    content: '${(p) => (p.isChecked ? '\\2713' : '\\00D7')}';
    margin-right: 5px;
    font-size: 15px;
    font-weight: 900;
    transform: translateY(-6px);
  }
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
