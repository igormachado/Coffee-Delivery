import styled from "styled-components";

export const DeliveryContainer = styled.div`
  margin-left: 160px;
  margin-top: 80px;
  margin-right: 160px;
`;

export const Title = styled.h1`
  width: 353px;
  height: 42px;

  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 32px;
  font-weight: 800;
  line-height: 1.3;
`;

export const SubTitle = styled.p`
  margin-top: 4px;
  margin-bottom: 40px;
  width: 552px;
  height: 26px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
`;

export const DeliveryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 102px;
`;

export const Article = styled.article`
  width: 526px;
  height: 270px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 32px; */
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
`;

export const LocationDelivery = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  img {
    height: 25px;
    width: 25px;

    border-radius: 6px;
    background: ${(props) => props.theme["purple-light"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  }
  strong {
    margin-left: 2px;
  }
`;

export const TimerDelivery = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  img {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 1000px;
    background: ${(props) => props.theme["yellow"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const Payment = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 1000px;
    background: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    color: ${props => props.theme["base-text"]};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  }
`;
