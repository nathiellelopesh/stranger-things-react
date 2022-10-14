import vecna from "../images/content/serie-image-01.png";
import boldEleven from "../images/content/serie-image-02.png";
import eleven from "../images/content/serie-image-03.png";

export const Gallery = () => {
  return (
    <section className="mt-20 min-h-[600px] ml-32 max-w-screen">
      <div>
        <h1 className="uppercase w-[800px] font-archivo font-normal text-5xl text-root-primary pb-10">
          A segunda série mais assistida da netflix
        </h1>
        <ul className="flex flex-row justify-start gap-12 pl-5 pt-14 absolute">
          <li className="w-60 h-60 outline outline-[20px] border-[3px] border-root-primary">
            <img
              src={vecna}
              alt="Imagem de Vecna"
              className="w-full h-full object-cover border-root-field border-[10px]"
            />
          </li>
          <li className="w-60 h-60 outline outline-[20px] border-[3px] border-root-primary">
            <img
              src={boldEleven}
              alt="Imagem dos amigos de Eleven"
              className="w-full h-full object-cover border-root-field border-[10px]"
            />
          </li>
          <li className="w-60 h-60 outline outline-[20px] border-[3px] border-root-primary">
            <img
              src={eleven}
              alt="Imagem dos amigos de Elevena"
              className="w-full h-full object-cover border-root-field border-[10px]"
            />
          </li>
        </ul>
        <div className="h-[400px] w-full bg-[right_bottom_20px] static bg-lgLamp bg-no-repeat"></div>
      </div>
    </section>
  );
};
