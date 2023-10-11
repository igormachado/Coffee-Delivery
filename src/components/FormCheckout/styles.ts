import { RadioGroup } from "@radix-ui/themes";
import styled from "styled-components";

export const FormContainer = styled.form`
  margin-left: 160px;
  margin-right: 32px;
  margin-top: 78px;
  margin-bottom: 240px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    width: 170px;
    height: 23px;
    margin-bottom: 15px;
  }
`;
export const FormContent = styled.main`
  padding: 40px;
`;

export const HeaderFormContent = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin-bottom: 32px;
  margin-top: 40px;

  :first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

export const AddressFormCard = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const AddressFormCardInput = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 560px;
  height: 216px;
`;

export const CEP = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
`;

export const Rua = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};

  width: 560px;
  height: 42px;
`;

export const InfoAddress = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  width: 560px;
  height: 42px;

  :first-child {
    display: flex;
    width: 200px;
    padding: 12px;
    align-items: center;
    gap: 4px;

    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
  }

  :last-child {
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
  }
`;

export const InfoNeighborhood = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  align-items: stretch;
  width: 560px;
  height: 42px;
`;

export const Neighborhood = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
`;

export const City = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
`;

export const UF = styled.input`
  display: flex;
  width: 6px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  width: 60px;
  height: 42px;
`;

export const FooterFormCheckout = styled.footer`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const FooterHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  img {
    width: 22px;
    height: 22px;
  }
`;
export const FooterPayment = styled.p`
  align-self: stretch;
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`;
export const FooterPaymentDescription = styled.p`
  /* display: flex; */
  height: 21px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: ${(props) => props.theme["base-text"]};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;

interface TransactionTypeButtonProps {
  variant: "credit" | "debit" | "cash";
}

export const ButtonGroupPayment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

interface TestandoProps {
  variant: "credit" | "debit" | "cash";
}

export const ButtonFormPaymentCredit = styled.button<TestandoProps>`
  padding: 16px;

  border-radius: 6px;
  cursor: pointer;
  border: 0;

  p {
    padding: 16px;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 4px;

    color: ${(props) => props.variant === "credit" && props.theme["purple"]};
  }
  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["purple-light"]};
  }
  &:not(hover) {
    /* transition: background-color 0.2s; */
    background: ${(props) => props.theme["base-button"]};
  }
`;

export const ButtonFormPaymentDebit = styled.button<TestandoProps>`
  padding: 16px;
  align-items: center;

  border-radius: 6px;
  cursor: pointer;
  border: 0;

  p {
    padding: 16px;
    align-items: center;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 6px;

    color: ${(props) => props.variant === "debit" && props.theme["purple"]};
  }
  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["purple-light"]};
  }
  &:not(hover) {
    /* transition: background-color 0.2s; */
    background: ${(props) => props.theme["base-button"]};
  }
`;

export const ButtonFormPaymentCash = styled.button<TestandoProps>`
  padding: 16px;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  cursor: pointer;
  border: 0;

  p {
    padding: 16px;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 6px;

    color: ${(props) => props.variant === "cash" && props.theme["purple"]};
  }
  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["purple-light"]};
  }

  &:not(hover) {
    /* transition: background-color 0.2s; */
    background: ${(props) => props.theme["base-button"]};
  }

`;

export const AsideCardContent = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 32px;
`;

export const CoffeeCardAsidePayment = styled.aside`
  display: flex;
`;

export const PaymentCardCoffee = styled.aside`
  margin-top: 40px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }
`;

export const PaymentCardCoffeeContainer = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border: 6px 44px;
  background: ${(props) => props.theme["base-card"]};
`;

export const DeliveryCoffeeAdd = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  background: ${(props) => props.theme["base-card"]};

  :first-child {
    display: flex;
    gap: 20px;
  }
`;

export const CoffeeImgPayment = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const ButtonPayment = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

export const ButtonIncreaseOrDecreaseOrder = styled.div`
  display: flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  span {
    width: 20px;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const ButtonDecreaseOrder = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
`;

export const ButtonIncreaseOrder = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
`;

export const ButtonRemoveOrder = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  height: 32px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
`;

export const PaymentTotal = styled.p`
  color: var(--base-text, #574f4d);
  text-align: right;

  /* Text/Bold M */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
`;

export const CoffeeHeaderTitleAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  :first-child {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  :last-child {
    color: ${(props) => props.theme["base-text"]};

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-left: 40px;
  }
`;

export const Divider = styled.hr`
  height: 0px;
  align-self: stretch;
  stroke-width: 1px;
  stroke: ${(props) => props.theme["base-button"]};
`;

export const FooterCardPayment = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
  }

  tbody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
  }

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    color: ${(props) => props.theme["base-title"]};
    text-align: right;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const TotalPayment = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  td {
    color: ${(props) => props.theme["base-subtitle"]};
    text-align: right;

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const ButtonPaymentOrder = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow"]};
  border: none;
  color: ${(porps) => porps.theme["white"]};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &:not(hover) {
    background: ${(props) => props.theme["yellow"]};
  }

  a {
    text-decoration: none;
    color: ${(porps) => porps.theme["white"]};

  }
`;
