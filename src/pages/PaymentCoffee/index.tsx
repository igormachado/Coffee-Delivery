import { useContext } from "react";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";
import deliveryMotoImg from "../../assets/delivery-moto.svg";
import { CurrencyDollar, MapPin, Money, Timer } from "@phosphor-icons/react";
import {
  Article,
  DeliveryContainer,
  DeliveryContent,
  LocationDelivery,
  Payment,
  SubTitle,
  TimerDelivery,
  Title,
} from "./styles";
import locationIcon from "../../assets/LocationIcon.svg";
import timerImg from "../../assets/timer.svg";
import currencyImg from "../../assets/currency-dollar.svg";

export function PaymentCoffee() {
  const {
    address,
    neighborhood,
    numbereOfHome,
    simbolOfState,
    city,
    paymentMethod,
    listPayment,
  } = useContext(CountAndPriceCoffee);

  return (
    <DeliveryContainer>
      <nav>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
      </nav>
      <DeliveryContent>
        <Article>
          <LocationDelivery>
            <img src={locationIcon} alt="" />
            <span>
              Entrega em
              <strong>
                Rua {(address.length > 0 && { address }, `${numbereOfHome} `)}
              </strong>
              {neighborhood} {city.length > 0 && "- " + city + ","}
              {simbolOfState}
            </span>
          </LocationDelivery>
          <TimerDelivery>
            <img src={timerImg} alt="tempo para chegar o pedido" />
            <span>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </span>
          </TimerDelivery>
          <Payment>
            <img src={currencyImg} alt="Moeda brasileira" />
            <span>
              Pagamento na entrega <strong>{paymentMethod}</strong>
            </span>
          </Payment>
        </Article>
        <aside>
          <img src={deliveryMotoImg} alt="entregador andando de moto" />
        </aside>
      </DeliveryContent>
    </DeliveryContainer>
  );
}
