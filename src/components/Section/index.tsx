import shoppingCartFill from "../../assets/shopping-cart-fill.svg";
import timerFill from "../../assets/timer-fill.svg";
import packageFill from "../../assets/package-fill.svg";
import coffeeFill from "../../assets/coffee-fill.svg";
import coffee from "../../assets/coffee.svg";
import { HeaderContainer, ParagraphCoffee, ParagraphPackage, ParagraphShoppingCart, ParagraphTimer, SectionContainer, SectionFooter } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Section() {
  return (
    <SectionContainer>
      <div>
        <HeaderContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeaderContainer>
        <SectionFooter>
          <ParagraphShoppingCart>
            <img src={shoppingCartFill} alt="" />
            <span>Compra simples e segura</span>
          </ParagraphShoppingCart>
          <ParagraphPackage>
            <img src={packageFill} alt="" />
            <span>Embalagem mantém o café intacto</span>
          </ParagraphPackage>
          <ParagraphTimer>
            <img src={timerFill} alt="" />
            <span>Entrega rápida e rastreada</span>
          </ParagraphTimer>
          
          <ParagraphCoffee>
            <img src={coffeeFill} alt="" />
            <span>O café chega fresquinho até você</span>
          </ParagraphCoffee>
        </SectionFooter>
      </div>
      <span><img src={coffee} alt="coffee delivery" /></span>
    </SectionContainer>
  );
}
