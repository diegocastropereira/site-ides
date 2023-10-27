import React from "react";

export const Header: React.FC = () => {
  return (
    <nav className="w-full  top-0 z-10 ">
      <div className="container mx-auto rounded-25">
        <div className="p-14 w-full flex justify-between items-center rounded-25 text-black">
          <div className="flex flex-col">
            <samp className="text-xs font-black">
              Ministério da Ciência, Tecnologia e Inovação
            </samp>
            <samp className="text-2xl font-Raleway font-black italic ">
              20ª Semana Nacional de Ciência e Tecnologia
            </samp>
          </div>

          <div className="flex items-end space-x-4 gap-10">
            <a href="/" className="font-medium  text-black hover:text-gray-300">
              Home
            </a>

            <a
              href="/about"
              className="font-medium text-black hover:text-gray-300"
            >
              IDES-31
            </a>

            <select
              className="form-select p-1 font-medium text-black bg-transparent"
              aria-label="Projetos"
            >
              <option selected>Projetos</option>
              <option value="1">Estufa Automática</option>
              <option value="2">Robô de detecção de gás</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
