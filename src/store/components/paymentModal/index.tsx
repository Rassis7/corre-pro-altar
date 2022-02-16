import { useContext, VFC } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { StoreContext } from "@/store";
import { utils, Modal } from "@/shared";

export const PaymentModal: VFC = () => {
  const { gift, selectGift } = useContext(StoreContext);

  const handleGoToLink = (link?: string) => link && window.open(link, "_blank");

  const onClose = () => selectGift();

  if (!gift) return null;

  return (
    <Modal
      open={!!gift}
      onClose={() => {}}
      title={<h2 className="text-center">Um gesto de carinho ❤️</h2>}
      content={
        <>
          <div className="mt-2">
            <p className="text-gray-300 font-semibold text-center">
              Você irá acessar um link do mercado pago totalmente seguro e com
              opções de pagamento no Cartão, Pix ou Boleto
            </p>
            <p className="text-gray-400 font-semibold text-center">
              Por favor, não esqueça também de conferir se o presente está
              correto!
            </p>
          </div>

          <section className="flex flex-col justify-evenly items-center">
            <div className="flex items-center p-5 my-4 bg-gray-600 rounded-xl">
              <Image
                src={gift.image}
                className="object-center object-cover rounded-full h-6 w-6 "
                width="100%"
                height="100%"
              />
              <div className="flex flex-col justify-center items-center mx-4">
                <h3 className="mb-0">{gift.name}</h3>
                <h4 className="mt-0">{utils.getPriceInBrl(gift.price)}</h4>
              </div>
            </div>
          </section>
        </>
      }
      footer={
        <>
          <button
            onClick={() => handleGoToLink(gift?.buyLink)}
            className="btn delay-200 bg-blue-400 hover:bg-blue-500"
          >
            <div className="flex items-center gap-1">
              <FaExternalLinkAlt />
              Acessar
            </div>
          </button>
          <button
            type="button"
            className="btn mx-3 bg-white text-gray-700"
            onClick={onClose}
          >
            Voltar para a loja
          </button>
        </>
      }
    />
  );
};
