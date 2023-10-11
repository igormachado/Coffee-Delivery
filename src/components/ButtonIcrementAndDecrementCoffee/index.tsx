import { useContext, useEffect, useState } from "react";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";
import {
  FooterButton,
  FooterButtonCardAddCart,
  FooterButtonDecrease,
  FooterButtonIncrease,
  FooterCartCoffeePrice,
} from "./styles";

import shoppingCartCardCoffeeButtonImg from "../../assets/shopping-cart-fill.svg";

import decreaseButtonImg from "../../assets/minus-bold.svg";

import increaseButtonImg from "../../assets/plus-bold.svg";
import { coffees } from "../../data";
import { listCoffee } from "../../listCoffee";

export function ButtonIcrementAndDecrementCoffee() {
  const {
    listCoffeeCard,
    setListCoffeeCard,
    count,
    setCount,
    coffeePrice,
    setCoffeePrice,
  } = useContext(CountAndPriceCoffee);

  const [countCoffee, setCountCoffee] = useState(count);
  const [priceCoffee, setPriceCoffee] = useState(coffeePrice);
  const [isClick, setIsClick] = useState(false);

  function handleIncrementCount() {
    setCount((state) => state + 1);

    setCountCoffee((state) => state + 1);

    setPriceCoffee((state) => state + 9.9);
    setCoffeePrice((state) => state + 9.9);
  }

  function handleDecrementCount() {
  
    if (count > 1) {
      setPriceCoffee((state) => state - 9.9);
      setCoffeePrice((state) => state - 9.9);

      setCountCoffee((state) => state - 1);
      setCount((state) => state - 1);
    } else if (count < 2) {
      setCount(1)
      setCountCoffee(1)
    }
    
  }

  return (
    <>
      <FooterCartCoffeePrice>
        <p>R$</p>
        <span>{priceCoffee.toFixed(2)}</span>
      </FooterCartCoffeePrice>
      <FooterButton>
        <FooterButtonDecrease onClick={handleDecrementCount}>
          <img src={decreaseButtonImg} alt="" />
        </FooterButtonDecrease>
        {countCoffee}
        <FooterButtonIncrease onClick={handleIncrementCount}>
          <img src={increaseButtonImg} alt="" />
        </FooterButtonIncrease>
      </FooterButton>
    </>
  );
}
