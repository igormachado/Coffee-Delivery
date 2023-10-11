import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FormCheckout } from "./components/FormCheckout";
import { PaymentCoffee } from "./pages/PaymentCoffee";
import { DefaultLayout } from "./Layouts";
import { Header } from "./components/Header";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingcart" element={<FormCheckout />} />
        <Route path="/deliverycoffee" element={<PaymentCoffee />} />
      </Route>
    </Routes>
  );
}
