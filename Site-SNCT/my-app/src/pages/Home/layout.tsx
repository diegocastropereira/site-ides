import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer/Footer";
import Carousel from "@/components/Carousel/Carousel";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="home">
      <Head>
        <title>Home-SNCT</title>
        <meta name="description" content="Descrição da sua página" />
      </Head>
      
      <div className="relative h-screen">
        <div className="z-30 absolute w-full">
          <Header />
        </div>
        

        <img src="/img/SNCT (1).png" alt="Logo da Semana Nacional de Ciência e Tecnologia" className="object-cover object-center h-full w-full transform scale-[0.999]" />
        

        <div className="flex flex-col gap-5">
          <div className="h-72 m-6">
            <Carousel />
          </div>
          

          <div className=" h-screen">
            <Card />
          </div>
        </div>

        <div className="h-40">
          <Footer />
        </div>

        {children}
      </div> 
    </div>
  );
};
