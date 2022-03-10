import { useSession } from 'next-auth/client'

// import Loader from 'components/Loader'
import OrderSummary from 'components/OrderSummary'
import DeliveryAddress from 'components/DeliveryAddress'
import Billing from 'components/Billing'
import Payment from 'components/Payment'

import styled from 'styled-components'

const Checkout = () => {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (session) {
    return (
      <>
        <FlexCenter>
          <Text step="1">Resumo da assinatura</Text>
          <Content>
            <OrderSummary />
          </Content>

          <Text step="2">Contato & endereço</Text>
          <Content>
            <DeliveryAddress />
          </Content>

          <Text step="3">Cupons & Fatura</Text>
          <Content>
            <Billing />
          </Content>

          <Text step="4">Pagamento</Text>
          <Content>
            <Payment />
          </Content>
        </FlexCenter>
      </>
    )
  }
  return <Text step="">Acesso negado: realize o login e tente novamente</Text>
}

const Text = styled.h1<{ step: string }>`
  color: #fbc822;
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  text-shadow: 0px 1px 2px #000;
  margin: 4rem 15px 2rem 22px;

  &::before {
    background: #fbc822;
    color: #000;
    content: '${(p) => p.step}';
    height: 35px;
    margin-right: 30px;
    font-weight: 100;
    width: 35px;
    transform: translate(-50px, -5px);
    position: absolute;
    text-align: center;
    font-size: 23px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
    @media only screen and (min-width: 1024px) {
      transform: translateX(-50px);
    }
  }

  &&:nth-of-type(1) {
    /* margin: 2rem 0; */
    margin-top: -30px;
  }

  &&:nth-of-type(2) {
    white-space: nowrap;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
    margin-left: 0;
  }
`

const FlexCenter = styled.div`
  border-left: solid #fbc822 1px;
  border-image: linear-gradient(
    to bottom,
    #fbc822 20%,
    #fbc822 95%,
    rgba(0, 0, 0, 0) 95%,
    rgba(0, 0, 0, 0) 95%
  );
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 2rem;
  margin-left: -32px;
  overflow: visible;
  padding-left: 32px;
  text-align: left;
  width: calc(100% - 40px);
  margin-left: 0;
  padding: 0 10px;

  @media only screen and (min-width: 320px) {
    /* width: 300px; */
  }

  @media only screen and (min-width: 480px) {
    /* width: 470px; */
  }

  @media only screen and (min-width: 600px) {
    /* width: 520px; */
  }

  @media only screen and (min-width: 768px) {
    /* width: 600px; */
  }

  @media only screen and (min-width: 1024px) {
    border-image: linear-gradient(
      to bottom,
      #fbc822 20%,
      #fbc822 90%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 90%
    );
    border-image-slice: 1;

    margin-top: 100px;
    margin-left: -32px;
    padding-left: 32px;
    width: 900px;
  }

  @media only screen and (min-width: 1260px) {
    width: 1150px;
  }

  @media only screen and (min-width: 1300px) {
    width: 1260px;
  }
`

export const Content = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(28, 19, 11, 0.65);
  border: 1px solid #000;
  box-shadow: 0px 1px 3px #000;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
  transform-origin: bottom;
  transform: translateY(0%);
  height: calc(100% - 7.5vw - 80px);
  width: auto;
  margin: 0;
  justify-content: space-evenly;
  padding: 10px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    height: unset;
    justify-content: space-between;
    margin: unset;
    padding: 30px;
    text-align: unset;
  }
`

export default Checkout
