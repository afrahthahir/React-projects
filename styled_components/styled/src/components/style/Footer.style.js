import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 100px 0px;
`;

export const Logo = styled.img`
  max-width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Container = styled.footer`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const FooterSection1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ul {
    flex: 1;
    margin: 30px;
    padding-left: 20px;
    list-style-type: none;
  }

  ul li {
    color: white;
  }

  li {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    ul li {
      text-align: center;
    }
  }
`;

export const SocialIcons = styled.div`
  ul {
    display: flex;
  }

  li {
    font-size: 20px;
    padding-right: 10px;
  }
  a {
    color: white;
    border: 1px solid white;
    border-radius: 40px;
    padding: 10px 10px;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  p {
    text-align: right;
    color: #91a1a4;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      text-align: center;
    }
  }
`;
