type CityKey = "Roma" | "Amsterdã" | "Munique";

export interface Gift {
  name: string;
  price: string;
  priceWithTax: string;
  buyLink: string;
  image: string;
}

export type RawGift = Gift & {
  city: CityKey;
};

export type GiftType = {
  [key in CityKey]: Gift[];
};
