import { createContext, ReactNode, useState, VFC } from "react";
import { Gift } from "../types";

type StoreContextType = {
  gift?: Gift;
  selectGift: (gift?: Gift) => void;
};

type StoreProviderType = {
  children: ReactNode;
};

export const StoreContext = createContext({} as StoreContextType);

export const StoreProvider: VFC<StoreProviderType> = ({ children }) => {
  const [gift, setGift] = useState<Gift>();

  const selectGift = (gift?: Gift) => setGift(gift ?? undefined);

  return (
    <StoreContext.Provider value={{ gift, selectGift }}>
      {children}
    </StoreContext.Provider>
  );
};
