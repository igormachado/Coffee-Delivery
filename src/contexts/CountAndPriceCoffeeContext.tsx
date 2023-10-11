import { ReactNode, createContext, useState } from "react";
import { coffees } from "../data";
import { listCoffee } from "../listCoffee";

interface ListCoffeeCardTypes {
  id: number;
  titleDescription?: string;
  coffeeImg?: string;
  count: number;
  coffeePrice: number;
  coffeeTitle?: string;
  coffeDescription?: string;
}
interface ListOfDeliveryTypes {
  cepPayment: string;
  streetPayment: string;
  numberOfHomePayment: string;
  neighborhoodPayment: string;
  cityPayment: string;
  simbolOfStatePayment: string;
  paymentMethod: string;
  totalPayment: string;
}

// interface ListCoffeeTypesArray extends Array<ListCoffeeCardTypes> {}

interface ListCoffeeContextType {
  listCoffeeCard: ListCoffeeCardTypes[];
  count: number;
  coffeePrice: number;

  setCount: React.Dispatch<React.SetStateAction<number>>;
  setListCoffeeCard: React.Dispatch<
    React.SetStateAction<ListCoffeeCardTypes[]>
  >;
  setCoffeePrice: React.Dispatch<React.SetStateAction<number>>;

  listPayment: ListOfDeliveryTypes[];
  city: string;
  simbolOfState: string;
  address: string;
  neighborhood: string;
  numbereOfHome: string;
  paymentMethod: string;

  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfHome: React.Dispatch<React.SetStateAction<string>>;
  setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setSimbolOfState: React.Dispatch<React.SetStateAction<string>>;
  setListPayment: React.Dispatch<React.SetStateAction<ListOfDeliveryTypes[]>>;
}

// interface PaymentListContextTypes {
//   listPayment: ListOfDeliveryTypes[];
//   setListPaymentAndDelivery: React.Dispatch<
//     React.SetStateAction<PaymentListContextTypes[]>
//   >;
// }

interface CoffeeProps {
  children: ReactNode;
}

export const CountAndPriceCoffee = createContext({} as ListCoffeeContextType);

export function CountAndPriceProvider({ children }: CoffeeProps) {
  const [count, setCount] = useState(1);
  const [coffeePrice, setCoffeePrice] = useState(9.9);
  const [countCoffee, setCountCoffee] = useState(1);
  const [listCoffeeCard, setListCoffeeCard] = useState<ListCoffeeCardTypes[]>(
    []
  );
  const [listPayment, setListPayment] = useState<ListOfDeliveryTypes[]>([]);
  const [city, setCity] = useState("");
  const [simbolOfState, setSimbolOfState] = useState("");
  const [address, setAdress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [numbereOfHome, setNumberOfHome] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // console.log(coffeePrice);

  return (
    <CountAndPriceCoffee.Provider
      value={{
        listCoffeeCard,
        setListCoffeeCard,
        count,
        setCount,
        coffeePrice,
        setCoffeePrice,
        listPayment,
        setListPayment,
        city,
        setCity,
        simbolOfState,
        setSimbolOfState,
        address,
        setAdress,
        neighborhood,
        setNeighborhood,
        numbereOfHome,
        setNumberOfHome,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CountAndPriceCoffee.Provider>
  );
}
