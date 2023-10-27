import { Header } from "@/components/Header/Header";
import { CarouselEstufa } from "@/components/Carousel/CarouselEstufa";
import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import Head from 'next/head'; // Added import for Head

interface IndexProps {}

export const Layout: React.FC<IndexProps> = () => {
  return (
    <div className="bg-yellow-400 h-screen">
      <Head>
        <title>Home-SNCT</title>
        <meta name="description" content="Descrição da sua página" />
      </Head>

      <Header />
      <CarouselEstufa />

      <section className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Descubra Nossa Estufa</h2>

        <div className="container flex flex-wrap">
          <div className="box w-full md:w-1/2 p-4">
            <div className="text-box">
              <h3>O que são estufas indoor?</h3>
              <p>
                As estufas são cabines projetadas para cultivar plantas
                internamente e, a depender do modelo e da marca, possuem
                diversos tamanhos e metragens. Dentro delas é possível controlar
                fatores como luz, temperatura e umidade relativa do ar e o
                melhor, ter liberdade de mobilidade
              </p>
            </div>
          </div>

          <div className="box w-full md:w-1/2 p-4">
            <div className="image-box">
              <Image
                src="/caminho/para/imagem1.jpg"
                alt="Imagem 1"
                width={800}
                height={500}
              />
            </div>
          </div>

          <div className="box w-full md:w-1/2 p-4">
            <div className="text-box">
              <h3>
                Como a utilização de estufas indoor se diferencia de outras
                formas de cultivo em ambientes fechados?
              </h3>
              <p>
                Uma das vantagens do cultivo ​indoor é a possibilidade de
                regular a iluminação da estufa. Escolhendo as lâmpadas certas,
                com emissão de ondas de raio ultravioleta e infravermelho, é
                possível influenciar os resultados da colheita.{" "}
              </p>
            </div>
          </div>

          <div className="box w-full md:w-1/2 p-4">
            <div className="image-box">
              <Image
                src="/caminho/para/imagem2.jpg"
                alt="Imagem 2"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

