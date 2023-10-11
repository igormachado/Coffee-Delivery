import styled from "styled-components";


export const FooterCartCoffee = styled.footer`
  display: flex;
  width: 208px;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;
  margin-top: 33px;
`;


export const FooterCartCoffeePrice = styled.div`
  display: flex;
  gap: 6px;
  width: 67px;
  height: 31px;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    text-align: right;
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    /* font-family: Baloo 2; */
    font-size: 24px;
    font-weight: 800;
    line-height: 1.3;
  }
`;

export const FooterButton = styled.span`
  display: flex;
  height: 38px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  text-decoration: none;
  border: none;
`;

export const FooterButtonDecrease = styled.button`
  width: 14px;
  height: 14px;
  /* text-decoration: none; */
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

 

  img {
    width: 14px;
    height: 14px;
  }
`;

export const FooterButtonIncrease = styled.button`
  width: 14px;
  height: 14px;
  /* text-decoration: none; */
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

  
`;

export const FooterButtonCardAddCart = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  text-decoration: none;

  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme["purple"]};
  }

  img {
    width: 22px;
    height: 22px;
  }
`;
