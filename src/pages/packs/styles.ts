import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: 'transparent';
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  min-height: calc(100vh - 70px);
  width: 100%;
  z-index: 0;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 70px;
    position: absolute;
  }
`

export const T = styled.h1`
  color: #2da650;
  font-weight: 600;
  font-size: 5rem;
  font-style: italic;
  margin: 30px 0;
  text-transform: uppercase;

  text-shadow: 0px 1px 4px #000;

  @media only screen and (min-width: 1024px) {
    margin: 70px 0;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  @media only screen and (min-width: 1024px) {
    max-width: 75%;
    flex-direction: row;
  }
`

export const Item = styled.div`
  margin: 0 0 50px;
  text-align: center;
  max-width: 300px;
  max-height: 350px;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 50px;
  }
`

export const H = styled.h1`
  color: #fbc822;
  font-weight: 600;
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 2.5px;
  text-align: center;
  text-shadow: 0px 1px 4px #000;
  margin-top: 5px;

  &&:nth-of-type(1) {
    text-transform: uppercase;
    position: absolute;
    text-shadow: 0px 1px 4px #47311b;
    z-index: 1;

    @media only screen and (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  &&:nth-of-type(2) {
    text-align: right;

    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`

export const ImgWrap = styled.div`
  box-shadow: 0px 1px 5px #000;
  height: auto;
  max-width: 145px;
  width: 145px;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
    width: 250px;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`

export const ImgComp = styled.img`
  display: block;
  height: auto;
  max-width: 145px;
  width: 145px;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
    width: 250px;
    transition: ease-in-out 0.3s all;
  }
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
