import { useContext, useState } from "react";
import {
  CoffeDescription,
  CoffeeCard,
  CoffeeImgCard,
  CoffeeTitle,
  CoffeeTitleDescription,
  FooterButton,
  FooterButtonCardAddCart,
  FooterButtonDecrease,
  FooterButtonIncrease,
  FooterCartCoffee,
  FooterCartCoffeePrice,
} from "./styles";
import shoppingCartCardCoffeeButtonImg from "../../assets/shopping-cart-fill.svg";

import { coffees } from "../../data";
import { ButtonIcrementAndDecrementCoffee } from "../ButtonIcrementAndDecrementCoffee";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";
import { ShoppingCart } from "@phosphor-icons/react";

export function CoffeeList() {
  let {
    listCoffeeCard,
    setListCoffeeCard,
    count,
    coffeePrice,
    setCoffeePrice,
    setCount,
  } = useContext(CountAndPriceCoffee);

  function teste(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleAddCoffeeCard(itemId: number) {
    setCoffeePrice(9.9);
    setCount(1);
    coffees.filter((item) => {
      if (item.id === itemId) {
        return setListCoffeeCard([
          ...listCoffeeCard,
          {
            id: item.id,
            titleDescription: item.titleDescription,
            coffeeImg: item.coffeeImg,
            coffeePrice: coffeePrice,
            count: count,
          },
        ]);
      }
    });
  }

  return (
    <>
      {coffees.map((coffee) => {
        return (
          <CoffeeCard key={coffee.id} onSubmit={teste}>
            <header>
              <CoffeeImgCard src={coffee.coffeeImg} alt="" />
              <CoffeeTitleDescription>
                {coffee.titleDescription}
              </CoffeeTitleDescription>
            </header>
            <CoffeeTitle>{coffee.coffeeTitle}</CoffeeTitle>
            <CoffeDescription>{coffee.coffeDescription}</CoffeDescription>
            <FooterCartCoffee>
              <ButtonIcrementAndDecrementCoffee />
              <FooterButtonCardAddCart
                onClick={() => handleAddCoffeeCard(coffee.id)}
              >
                <img src={shoppingCartCardCoffeeButtonImg} alt="" />
              </FooterButtonCardAddCart>
            </FooterCartCoffee>
          </CoffeeCard>
        );
      })}
    </>
  );
}
