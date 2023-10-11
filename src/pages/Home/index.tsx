import { useContext } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Section } from "../../components/Section";
import { CountAndPriceCoffee } from "../../contexts/CountAndPriceCoffeeContext";

export function Home() {
  const { count } = useContext(CountAndPriceCoffee);

  return (
    <>
      <Section />
      <Main />
    </>
  );
}
