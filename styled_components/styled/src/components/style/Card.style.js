import styled from "styled-components";

export const StyledCards = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0px 20px;
  margin: 0px auto;
`;
export const CardSection = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout};
  margin: 40px 0px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
export const CardSection1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h2 {
    font-size: 28px;
    padding-bottom: 20px;
  }
`;

export const CardSection2 = styled.div`
  flex: 1;
  max-width: 100%;
`;

export const Image = styled.img`
  width: 80%;
`;
