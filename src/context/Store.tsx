import { createContext, ReactNode, useState, VFC } from "react";
import { GiftType } from "../types/gift";

type StoreContextType = {
  gift?: GiftType;
  selectGift: (gift?: GiftType) => void;
};

type StoreProviderType = {
  children: ReactNode;
};

export const StoreContext = createContext({} as StoreContextType);

export const StoreProvider: VFC<StoreProviderType> = ({ children }) => {
  const [gift, setGift] = useState<GiftType>();

  const selectGift = (gift?: GiftType) => setGift(gift ?? undefined);

  return (
    <StoreContext.Provider value={{ gift, selectGift }}>
      {children}
    </StoreContext.Provider>
  );
};
