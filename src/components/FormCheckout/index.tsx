import mapImg from "../../assets/map-loin-line-regular.svg";
import currencyDollarImg from "../../assets/currency-dollar.svg";
import creditCardImg from "../../assets/credit-card.svg";
import bankImg from "../../assets/bank-regular.svg";
import moneyImg from "../../assets/money.svg";
import trashImg from "../../assets/trash.svg";
import { Header } from "../Header";
import minusImg from "../../assets/minus-bold.svg";
import addImg from "../../assets/plus-bold.svg";
import coffeeExpressoImg from "../../assets/Type=Expresso.svg";

import {
  AddressFormCard,
  AddressFormCardInput,
  AsideCardContent,
  ButtonDecreaseOrder,
  ButtonFormPaymentCash,
  ButtonFormPaymentCredit,
  ButtonFormPaymentDebit,
  ButtonGroupPayment,
  ButtonIncreaseOrDecreaseOrder,
  ButtonIncreaseOrder,
  ButtonPayment,
  ButtonPaymentOrder,
  ButtonRemoveOrder,
  CEP,
  City,
  CoffeeHeaderTitleAndPrice,
  CoffeeImgPayment,
  DeliveryCoffeeAdd,
  Divider,
  FooterCardPayment,
  FooterFormCheckout,
  FooterHeader,
  FooterPayment,
  FooterPaymentDescription,
  FormContainer,
  FormContent,
  HeaderFormContent,
  InfoAddress,
  InfoNeighborhood,
  Neighborhood,
  PaymentCardCoffee,
  PaymentCardCoffeeContainer,
  PaymentTotal,
  Rua,
  TotalPayment,
  UF,
} from "./styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";
import { coffees } from "../../data";
import { ButtonIcrementAndDecrementCoffee } from "../ButtonIcrementAndDecrementCoffee";

import { priceFormatter } from "../../utils/formatter";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

interface TransactionTypeButtonProps {
  variant: "credit" | "debit" | "cash";
}

export function FormCheckout() {
  const {
    listCoffeeCard,
    setListCoffeeCard,
    coffeePrice,
    count,
    setCount,
    listPayment,
    setListPayment,
    city,
    simbolOfState,
    setCity,
    setSimbolOfState,
    address,
    setAdress,
    neighborhood,
    setNeighborhood,
    numbereOfHome,
    setNumberOfHome,
    paymentMethod,
    setPaymentMethod,
  } = useContext(CountAndPriceCoffee);

  const [priceCoffee, setPriceCoffee] = useState(9.9);
  const [totalToPay, setTotalToPay] = useState("");
  const [cep, setCep] = useState("");

  const deliveryCustom = 3.5;

  let listOfPrice: number[] = [];
  let sumWithInitial: number = 0;

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  listCoffeeCard.filter((item) => listOfPrice.push(item.coffeePrice));

  if (listOfPrice.length > 0) {
    sumWithInitial = listOfPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(sumWithInitial);
  }

  let pay = priceFormatter.format(sumWithInitial + deliveryCustom);

  function handlePaymentCash() {
    setPaymentMethod("cash");
  }
  function handlePaymentDebit() {
    setPaymentMethod("debit");
  }

  function handlePaymentCredit() {
    setPaymentMethod("credit");
  }

  function handleInputCep(e: any) {
    setCep(e.target.value);
  }

  function handleInputAddress(e: any) {
    setAdress(e.target.value);
  }

  function handleInputNumberOfHome(e: any) {
    setNumberOfHome(e.target.value);
  }

  function handleInputNeighborhood(e: any) {
    setNeighborhood(e.target.value);
  }

  function handleInputCity(e: any) {
    setCity(e.target.value);
  }

  function handleInputSimbolOfState(e: any) {
    setSimbolOfState(e.target.value);
  }

  function handleCreateNewPayment() {
    setListPayment([
      ...listPayment,
      {
        streetPayment: address,
        cepPayment: cep,
        numberOfHomePayment: numbereOfHome,
        neighborhoodPayment: neighborhood,
        cityPayment: city,
        simbolOfStatePayment: simbolOfState,
        paymentMethod: paymentMethod,
        totalPayment: pay,
      },
    ]);
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmitForm}>
        <AsideCardContent>
          <FormContent>
            <h2>Complete seu pedido</h2>
            <AddressFormCard>
              <HeaderFormContent>
                <img src={mapImg} alt="" />
                <div>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </HeaderFormContent>
              <AddressFormCardInput>
                <label htmlFor="">
                  <CEP
                    type="number"
                    placeholder="CEP"
                    value={cep}
                    onChange={handleInputCep}
                    required
                    name="cep"
                  />
                </label>
                <label htmlFor="">
                  <Rua
                    value={address}
                    onChange={handleInputAddress}
                    type="text"
                    placeholder="RUA"
                    required
                  />
                </label>
                <InfoAddress htmlFor="">
                  <input
                    type="number"
                    placeholder="Número"
                    required
                    onChange={handleInputNumberOfHome}
                    value={numbereOfHome}
                  />
                  <input type="text" placeholder="Complemento" />
                </InfoAddress>

                <InfoNeighborhood htmlFor="">
                  <Neighborhood
                    type="text"
                    placeholder="Bairro"
                    value={neighborhood}
                    onChange={handleInputNeighborhood}
                    required
                  />
                  <City
                    type="text"
                    placeholder="Cidade"
                    value={city}
                    onChange={handleInputCity}
                    required
                  />
                  <UF
                    type="text"
                    placeholder="UF"
                    value={simbolOfState}
                    onChange={handleInputSimbolOfState}
                    required
                  />
                </InfoNeighborhood>
              </AddressFormCardInput>
            </AddressFormCard>

            <FooterFormCheckout>
              <FooterHeader>
                <img src={currencyDollarImg} alt="" />
                <div>
                  <FooterPayment>Pagamento</FooterPayment>
                  <FooterPaymentDescription>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </FooterPaymentDescription>
                </div>
              </FooterHeader>

              <ButtonGroupPayment>
                <ButtonFormPaymentCredit
                  variant="credit"
                  value="credit"
                  onClick={handlePaymentCredit}
                >
                  <p>
                    {" "}
                    <CreditCard />
                    CARTÃO DE CRÉDITO
                  </p>
                </ButtonFormPaymentCredit>
                <ButtonFormPaymentDebit
                  variant="debit"
                  value="debit"
                  onClick={handlePaymentDebit}
                >
                  <p>
                    <Bank />
                    CARTÃO DE DÉBITO
                  </p>
                </ButtonFormPaymentDebit>
                <ButtonFormPaymentCash
                  variant="cash"
                  value="cash"
                  onClick={handlePaymentCash}
                >
                  <p>
                    <Money />
                    DINHEIRO
                  </p>
                </ButtonFormPaymentCash>
              </ButtonGroupPayment>
            </FooterFormCheckout>
          </FormContent>

          <PaymentCardCoffee>
            <h2>Cafés selecionados</h2>
            <PaymentCardCoffeeContainer>
              <Teste />
              <FooterCardPayment>
                <table>
                  <tbody>
                    <tr>
                      <td>Total de itens</td>

                      <td>{priceFormatter.format(sumWithInitial)}</td>
                    </tr>
                    <tr>
                      <td>Entrega</td>
                      <td>{priceFormatter.format(deliveryCustom)}</td>
                    </tr>
                    <TotalPayment>
                      <td>Total</td>
                      <td>
                        {priceFormatter.format(sumWithInitial + deliveryCustom)}
                      </td>
                    </TotalPayment>
                  </tbody>
                </table>
                <ButtonPaymentOrder onClick={handleCreateNewPayment}>
                  <NavLink to="/deliverycoffee" title="pagamento e entrega">
                    confirmar pedido
                  </NavLink>
                </ButtonPaymentOrder>
              </FooterCardPayment>
            </PaymentCardCoffeeContainer>
          </PaymentCardCoffee>
        </AsideCardContent>
      </FormContainer>
    </>
  );
}

function Teste() {
  const {
    listCoffeeCard,
    setListCoffeeCard,
    count,
    coffeePrice,
    setCoffeePrice,
    setCount,
  } = useContext(CountAndPriceCoffee);
  const [countCoffee, setCountCoffee] = useState(1);
  const [priceCoffee, setPriceCoffee] = useState(9.9);

  function handleIncrementCount(itemId: number) {
    listCoffeeCard.filter((item) => {
      if (item.id === itemId) {
        if (item.count >= 1) {
          setCountCoffee(item.count++);
          setPriceCoffee((state) => state + 9.9);
          setCoffeePrice((item.coffeePrice += 9.9));
        }
      }
    });
  }

  function handleDecrementCount(itemId: number) {
    listCoffeeCard.filter((item) => {
      if (item.id === itemId) {
        if (item.count > 1) {
          setCountCoffee(item.count--);
          setPriceCoffee((state) => state - 9.9);
          setCoffeePrice((item.coffeePrice -= 9.9));
        }
      }
    });
  }

  function handleDeleteCoffee(deleteCoffeeFromList: number) {
    setListCoffeeCard(
      listCoffeeCard.filter((item) => item.id !== deleteCoffeeFromList)
    );
  }

  // console.log(listCoffeeCard);
  // console.log("Coffee count from form checkout: ", countCoffee);
  // console.log("Price Coffee from form checkout: ", priceCoffee);
  // console.log("Coffee price from form checkout: ", coffeePrice);

  return (
    <>
      {listCoffeeCard.map((item) => {
        return (
          <DeliveryCoffeeAdd key={item.id}>
            <div>
              <CoffeeImgPayment src={item.coffeeImg} alt="" />
              <div>
                <CoffeeHeaderTitleAndPrice>
                  <p>{item.titleDescription}</p>
                  <p>{"R$ " + item.coffeePrice.toFixed(2)}</p>
                </CoffeeHeaderTitleAndPrice>
                <ButtonPayment>
                  <ButtonIncreaseOrDecreaseOrder>
                    <ButtonDecreaseOrder
                      onClick={() => handleDecrementCount(item.id)}
                    >
                      <img src={minusImg} alt="" />
                    </ButtonDecreaseOrder>
                    <span> {item.count}</span>
                    <ButtonIncreaseOrder
                      onClick={() => handleIncrementCount(item.id)}
                    >
                      <img src={addImg} alt="" />
                    </ButtonIncreaseOrder>
                  </ButtonIncreaseOrDecreaseOrder>
                  <div>
                    <ButtonRemoveOrder
                      onClick={() => handleDeleteCoffee(item.id)}
                    >
                      <img src={trashImg} alt="" />
                    </ButtonRemoveOrder>
                  </div>
                </ButtonPayment>
              </div>
            </div>
          </DeliveryCoffeeAdd>
        );
      })}
      {listCoffeeCard.length > 0 ? <Divider /> : ""}
    </>
  );
}
