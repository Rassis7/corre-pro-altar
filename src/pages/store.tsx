import { GetStaticProps, NextPage } from "next";
import { api } from "@/shared";
import { Card, PaymentModal, GiftType, StoreProvider } from "@/store";

type StoreType = {
  gifts: GiftType[];
};

// const gifts = [
//   {
//     name: "Cafe",
//     price: "10,5",
//     buyLink: "https://mpago.la/2BWqQgQ",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 2",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 3",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 4",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 5",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 6",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 7",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 8",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
//   {
//     name: "Cafe 9",
//     price: "10,5",
//     buyLink: "https://mpago.la/1SF2zsY",
//     image:
//       "https://image.freepik.com/vetores-gratis/plano-de-…da-hora-do-cafe-com-xicara-de-cafe_79603-1560.jpg",
//   },
// ];

const Store: NextPage<StoreType> = ({ gifts }) => {
  return (
    <StoreProvider>
      <div className="page-container flex-col items-center overscroll-x-none">
        <h1>Sua presença é o nosso maior presente.</h1>
        <h3>
          Mas aceitamos a ajuda de todos para construirmos algo inesquecível
        </h3>

        <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 sm:w-2/3 md:grid-cols-3 lg:grid-cols-4">
          {gifts.map((props) => (
            <Card key={props.name} {...props} />
          ))}
        </section>
      </div>
      <PaymentModal />
    </StoreProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: gifts } = await api.get<GiftType[]>("/gifts");
  return {
    props: { gifts },
    revalidate: 60,
  };
};

export default Store;
