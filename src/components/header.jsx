import React from "react";
import ReactAudioPlayer from "react-audio-player";
import logo from "../images/banner/logo.svg";
import music from "../musics/normal-world.mp3";

export const Header = () => {
  function switchTheme() {}

  return (
    <header className="bg-light-header min-h-[850px] flex flex-col items-center static before:h-[850px] before:content-[''] before:w-full before:absolute before:bg-[url('./src/images/banner/florest.webp')] before:bg-cover before:saturate-0 before:bg-no-repeat before:bg-center before:opacity-20 dark:bg-dark-header">
      <ReactAudioPlayer id="music" src={music} aria-details="Audio do site" />
      <section className="absolute">
        <img src={logo} className="w-[630px] mx-auto mt-16 dark:rotate-180" />
        <p className="mx-auto w-[755px] font-libre text-center dark:rotate-180 dark:text-root-contrast">
          Uma jornada para quem não tem medo do desconhecido. O caminho para o
          Mundo invertido é incerto, repleto de obstáculos e perigos. Porém, a
          recompensa é grande: salvar Hawkings e o mundo todo das garras de
          Vecna. Você está preparado? Então clique no botão abaixo para entrar
          no Mundo Invertido!
        </p>
        <div className="pt-12 flex justify-center">
          <button
            onClick={() => switchTheme()}
            className="uppercase px-8 py-4 bg-transparent cursor-pointer border-solid border-[3px] border-root-primary text-root-primary font-black text-xl duration-1000 hover:bg-root-primary hover:text-root-contrast dark:font-dark dark:bg-root-primary dark:text-root-contrast"
          >
            Inverter Mundos
          </button>
        </div>
        <div className="w-screen h-full max-w-[900px] absolute bottom-[-460px] right-[-80px] bg-lgTop bg-no-repeat bg-center"></div>
      </section>
    </header>
  );
};
