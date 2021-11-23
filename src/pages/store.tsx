import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { Card } from "../components/Card";
import { PaymentModal } from "../components/PaymentModal";
import { GiftsTypeRaw } from "../types/gift";

type StoreType = {
  gifts: GiftsTypeRaw[];
};

const gifts = [
  {
    name: "Cafe",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 2",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 3",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 4",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 5",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 6",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 7",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 8",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
  {
    name: "Cafe 9",
    price: "10,5",
    buyLink: "https://mpago.la/1SF2zsY",
    image:
      "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
  },
];

const Store: NextPage<StoreType> = ({ gifts }) => {
  console.log(gifts);

  return (
    <>
      <div className="page-container flex-col items-center overscroll-x-none">
        <h1>Sua presença é o nosso maior presente.</h1>
        <h3>
          Mas aceitamos a ajuda de todos para construirmos algo inesquecível
        </h3>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gifts.map((props) => (
            <Card key={props.name} {...props} />
          ))}
        </div>
      </div>
      {/* <PaymentModal link={"aoskods"} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { data: gifts } = await axios.get<GiftsTypeRaw[]>(
  //   "https://sheet.best/api/sheets/36b49bda-04a0-411b-827c-9a238e8c1b40"
  // );
  return {
    props: { gifts },
    revalidate: 60,
  };
};

export default Store;
