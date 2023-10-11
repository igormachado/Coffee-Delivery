import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globa";
import { Home } from "./pages/Home";

import { CountAndPriceProvider } from "./contexts/CountAndPriceCoffeeContext";
import { FormCheckout } from "./components/FormCheckout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./Router";
import { DefaultLayout } from "./Layouts";
import { PaymentCoffee } from "./pages/PaymentCoffee";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CountAndPriceProvider>
          <Router />
        </CountAndPriceProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
