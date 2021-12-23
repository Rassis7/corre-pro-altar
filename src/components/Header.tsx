import { VFC } from "react";

type Props = {};

export const Header: VFC<Props> = () => {
  return (
    <header className="flex justify-between item-center py-4 px-6">
      <h3 className="text-red-500 text-4xl font-bold">Corre pro altar</h3>
      <nav className="flex items-center">
        <button className="nav-btn bg-gray-600">Confirmar presença</button>
        <button className="nav-btn bg-red-500 text-gray-100">
          Presentear os noivos
        </button>
      </nav>
    </header>
  );
};
