import { useState, VFC } from "react";
import Image from "next/image";
import { Modal } from "./Modal";
import { FaCut, FaCheck, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  link: string;
};

export const PaymentModal: VFC<Props> = ({ link }) => {
  const [isCopy, setIsCop] = useState(false);

  const copyPixKey = () => {
    setIsCop(true);
    navigator.clipboard.writeText("cfb29cb2-a99a-4d2f-b753-367486937066");
  };

  return (
    <Modal
      open={true}
      onClose={() => {}}
      title="Formas de dar o presente!"
      content={
        <>
          <div className="mt-2">
            <p className="text-gray-400 font-semibold">
              Aqui temos duas formas que você pode dar o presente
            </p>
          </div>
          {/* <ConfirmationForm /> */}

          <section className="grid grid-cols-2 divide-x divide-gray-600 gap-8 text-center">
            <section className="flex flex-col justify-between items-center">
              <h4>Pagar com PIX</h4>
              <Image
                // loader={myLoader}
                src="/qrcode_pix.jpeg"
                alt="pix"
                width={200}
                height={200}
              />
              {isCopy ? (
                <button className="btn font-normal text-sm mt-4 delay-200 bg-green-400 hover:bg-green-500">
                  <div className="flex items-center gap-1">
                    <FaCheck />
                    Copiado
                  </div>
                </button>
              ) : (
                <button
                  className="btn font-normal text-sm mt-4 delay-200 bg-blue-400 hover:bg-blue-500"
                  onClick={copyPixKey}
                >
                  <div className="flex items-center gap-1">
                    <FaCut />
                    Copiar chave PIX
                  </div>
                </button>
              )}
            </section>
            <section className="flex flex-col justify-between items-center">
              <h4 className="mb-0">Mercado pago</h4>
              <Image
                // loader={myLoader}
                src="/mp.png"
                alt="pix"
                width={300}
                height={300}
              />
              <button className="btn font-normal text-sm mt-4 delay-200 bg-blue-400 hover:bg-blue-500">
                <div className="flex items-center gap-1">
                  <FaExternalLinkAlt />
                  Acessar
                </div>
              </button>
            </section>
          </section>
        </>
      }
      footer={
        <button
          type="button"
          className="btn mx-1 bg-white text-base font-medium text-gray-700  hover:bg-gray-50"
          // onClick={onClose}
        >
          Fechar
        </button>
      }
    />
  );
};
