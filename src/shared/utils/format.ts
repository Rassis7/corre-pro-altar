export const getPriceInBrl = (price: string) => {
  const priceNumber = Number(price.replace(",", "."));
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatted.format(priceNumber);
};
