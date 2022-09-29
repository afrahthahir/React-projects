import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
  width: 1000px;
  max-width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  height: 38px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #00252e;
  font-weight: 600;
  font-size: 15px;
  padding: 15px 60px;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border: 2px solid black;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  h1 {
    margin: 20px 0px;
    font-size: 38px;
    color: #00252e;
  }
  p {
    margin: 20px 0px;
  }

  button {
    background-color: #fd1aa3;
    color: white;
    font-weight: 600;
    font-size: 16px;
    padding: 15px 60px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;

    h1 {
      text-align: center;
      margin: 20px 0px;
    }
    p {
      text-align: center;
      margin: 20px 0px;
    }
  }
`;

export const Section2 = styled.section`
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  height: 280px;
`;
