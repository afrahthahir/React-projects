import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src="./images/cta-logo-one.svg"></CTAlogoOne>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premiere access to Raya and the Last Dragon for an additional
            fee with a Disney+ subscription. As of 03/26/21, the price of
            Disney+ and the Disney Bundle will increase by $1.
          </Description>
          <CTAlogoTwo src="./images/cta-logo-two.png"></CTAlogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("./images/login-background.jpg");
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 12px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CTAlogoOne = styled.img`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
`;
const CTAlogoTwo = styled.img`
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  width: 100%;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;

  //t lr b
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
