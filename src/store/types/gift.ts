type CityKey = "Munique" | "Roma" | "Amsterdã" | "Outros";

export interface Gift {
  name: string;
  price: string;
  priceWithTax: string;
  buyLink: string;
  image: string;
  description?: string;
}

export type RawGift = Gift & {
  city: CityKey;
};

export type GiftType = {
  [key in CityKey]: Gift[];
};
