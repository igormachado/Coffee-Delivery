import { ShoppingCart } from "@phosphor-icons/react";
import logoImg from "../../assets/logo.svg";
import locationIcon from "../../assets/LocationIcon.svg";
import {
  HeaderContainer,
  HeaderLocation,
  HeaderShoppingCart,
  ImageLogo,
  NavCardShopping,
  Testando,
} from "./styles";
import { useContext } from "react";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { listCoffeeCard, city, simbolOfState, listPayment } =
    useContext(CountAndPriceCoffee);

  let amountCoffeeCardAdd = listCoffeeCard.length;

  return (
    <HeaderContainer>
      <NavLink to="/" title="página inicial">
        <span>
          <ImageLogo src={logoImg} />
        </span>
      </NavLink>
      <NavCardShopping>
        <HeaderLocation>
          <NavLink to="/deliverycoffee" title="página de entreda do delivery">
            <img src={locationIcon} />
            <span>
              {city} {simbolOfState.length > 0 ? "- " + simbolOfState : ""}
            </span>
          </NavLink>
        </HeaderLocation>
        <NavLink to="/shoppingcart" title="carrinho de compras">
          <HeaderShoppingCart>
            <ShoppingCart />
            {amountCoffeeCardAdd > 0 ? (
              <Testando>
                <span>{amountCoffeeCardAdd}</span>
              </Testando>
            ) : (
              ""
            )}
          </HeaderShoppingCart>
        </NavLink>
      </NavCardShopping>
    </HeaderContainer>
  );
}
