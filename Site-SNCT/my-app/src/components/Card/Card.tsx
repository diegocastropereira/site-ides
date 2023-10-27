import ButtonCard from "@/components/button/ButtoCard";

export const Card = () => {
  return (
    <div className="flex m-10 gap-10 justify-center items-center">
      <a href="">
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative flex items-center justify-center mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="/img/Imagem_do_WhatsApp_de_2022-11-03_à_s__18.33.11_12c83d6a-removebg-preview.png"
              className="h-96"
              alt=""
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              IDES-31
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Revelando os bastidores do desenvolvimento. Projetos, desafios e
              conquistas da turma de Sistemas. Conecte-se à evolução diária da
              comunidade codificante
            </p>
          </div>
          <div className="p-6 pt-0">
            <ButtonCard />
          </div>
        </div>
      </a>
      <a href="">
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative flex items-center justify-center mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r  from-blue-500 to-blue-600">
            <img src="/img/estufa.png" className="" alt="" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Estufa
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Cultive com maestria em nossas estufas inovadoras: controle total,
              liberdade de movimento. Transforme seu espaço, conquiste o cultivo
              perfeito!
            </p>
          </div>
          <div className="p-6 pt-0">
            <ButtonCard />
          </div>
        </div>
      </a>
      <a href="">
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative flex items-center justify-center mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src="/img/robot.png" alt="" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              robo
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Robô LEGO: Detecta e combate fumaça instantaneamente. Inovação
              compacta para proteção máxima. Brinque seguro, viva seguro!
            </p>
          </div>
          <div className="p-6 pt-0">
            <ButtonCard />
          </div>
        </div>
      </a>
    </div>
  );
};
