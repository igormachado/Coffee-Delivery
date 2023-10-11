import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 32px 160px;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme["base-background"]};

  /* nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
  } */
`;

export const NavCardShopping = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const ImageLogo = styled.img`
  width: 84.952px;
  height: 40px;

`;

export const HeaderLocation = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  
  a {
    text-decoration: none;
  }


  border-radius: 6px;
  background: ${(props) => props.theme["purple-light"]};

  span {
    text-decoration: none;

    color: ${(props) => props.theme["purple-dark"]};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const HeaderShoppingCart = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;


  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};
`;

export const Testando = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};

  color: ${(props) => props.theme.white};
  text-align: center;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
    width: 22px;
    height: 22px;
  }

  span {
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    position: absolute;

    border-radius: 1000px;
    background: var(--brand-yellow-dark, #c47f17);
  }
`;
