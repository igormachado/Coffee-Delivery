import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  width: 1140px;
  height: 544px;
  margin: 94px 160px 113px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 588px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  h1 {
    align-self: stretch;
    color: ${(props) => props.theme["base-title"]};
    font-family: Baloo 2;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    align-items: stretch;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const SectionFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 66px;
`;

export const ParagraphShoppingCart = styled.p`
  display: flex;
  width: 231px;
  align-items: center;
  gap: 12px;
  margin-bottom: 31px;

  :first-child {
    padding: 8px;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
    background: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    flex: 1 0 0;
  }
`;

export const ParagraphTimer = styled.p`
  display: flex;
  width: 231px;
  align-items: center;
  gap: 12px;
  margin-bottom: 31px;

  :first-child {
    padding: 8px;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
    background: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    flex: 1 0 0;
  }
`;

export const ParagraphPackage = styled.p`
  display: flex;
  width: 231px;
  align-items: center;
  gap: 12px;
  margin-bottom: 31px;

  :first-child {
    padding: 8px;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
    background: ${(props) => props.theme["base-text"]};
  }

  span {
    flex: 1 0 0;
  }
`;

export const ParagraphCoffee = styled.p`
  display: flex;
  width: 231px;
  align-items: center;
  gap: 12px;
  margin-bottom: 31px;

  :first-child {
    padding: 8px;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
    background: ${(props) => props.theme["purple"]};
  }

  span {
    flex: 1 0 0;
  }
`;
