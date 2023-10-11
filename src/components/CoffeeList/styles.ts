import styled from "styled-components";

export const CoffeeCard = styled.form`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme["base-card"]};
  margin-bottom: 40px;
`;

export const CoffeeContant = styled.div`
  
`

export const CoffeeImgCard = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-left: 68px;
  margin-right: 68px;
  margin-top: -20px;
  margin-bottom: 12px;
`;


export const CoffeeTitleDescription = styled.span`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${(props) => props.theme["yellow-light"]};
  width: 81px;
  height: 21px;
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 10px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  margin-left: 87.5px;
  margin-right: 87.5px;
  margin-bottom: 20px;
`;

export const CoffeeTitle = styled.p`
  width: 216px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: Baloo 2;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`;

export const CoffeDescription = styled.p`
  width: 216px;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 36.5px;
`;

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

export const FooterButton = styled.button`
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
