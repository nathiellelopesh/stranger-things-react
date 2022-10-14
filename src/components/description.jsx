import React from "react";
import invertedWorld from "../images/content/inverted-world.png";

export const Description = () => {
  return (
    <main className="pt-100 min-h-[700px]">
      <div className="bg-lgBottom bg-no-repeat bg-center top-[742px] right-60 max-w-[900px] w-screen h-full absolute rotate-180 -scale-x-100"></div>
      <section className="flex justify-between items-center mx-32 pt-80">
        <div className="w-[50%]">
          <h1 className="max-w-[300px] font-archivo font-normal text-5xl text-root-primary pb-10">
            O mundo invertido
          </h1>
          <p className="font-libre text-root-field text-base">
            O Mundo Invertido parece uma cópia do nosso mundo, mas com criaturas
            horrendas, tempestades assustadoras, muita escuridão e entidades
            malignas. Um reino controlado por Vecna, que tem planos de trazer
            tudo isso ao nosso mundo.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={invertedWorld}
            alt="stranger things banner: mundo invertido"
            className="w-4/5"
          />
        </div>
      </section>
      <section className="flex justify-between items-center mx-32 pt-20 pb-10">
        <div className="flex justify-center items-center">
          <div className="bg-root-primary">
            <iframe
              width="420"
              height="210"
              src="https://www.youtube.com/embed/otutSrxYpa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative bottom-6 left-6 bg-gradient-to-r p-[2px] from-[#ffffff] to-[#cf0f0f]" //margin with padding
            ></iframe>
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className=" font-archivo font-normal text-5xl text-root-primary pb-10 text-right pl-40">
            stranger things vol. 4
          </h1>
          <p className="font-libre text-root-field text-base text-right">
            Mais experientes, os heróis de Stranger Things também precisam
            enfrentar desafios maiores do que nunca e fazer decisões que vão
            mudar suas vidas para sempre. Confira ao lado o trailer da quarta
            temporada.
          </p>
        </div>
      </section>
    </main>
  );
};
