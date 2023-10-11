import { MainContainer, MainContent } from "./styles";
import { CoffeeList } from "../CoffeeList";

export function Main() {
  return (
    <MainContainer>
      <h1>Nossos cafés</h1>
      <MainContent>
        <CoffeeList />
      </MainContent>
    </MainContainer>
  );
}
