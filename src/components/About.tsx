import Image from "next/image";
import perfilImg from "/public/assets/home_img.png";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center md:h-screen text-center mb-20"
    >
      <div className="max-w-[1240px] m-auto ">
        <div className="mb-12">
          <h1>Sobre mim</h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="md:w-[80%]">
            <Image
              src={perfilImg}
              width={300}
              height={200}
              className="rounded-md "
            />
          </div>
          <div className="mt-10 px-4 flex flex-col gap-6 items-center">
            <p>
              Olá, meu nome é Sergio Winkelstroter. Prazer em te conhecer! Meu
              inicio no mundo da programação se deu ha quase 1 ano, quando
              entrei na faculdade de Sistema para Internet. Desde então fiz
              alguns cursos, participei também de muitos eventos online e
              desenvolvi alguns projetos web. Estou na procura da minha primeira
              experiência profissional e quero me aprofundar ainda mais no
              desenvolvimento Web e Mobile.
            </p>
            <a
              download
              href="/CV.pdf"
              className="bg-blue-600 w-40 h-10 p-2 rounded-lg text-white hover:bg-blue-900 hover:cursor-pointer"
            >
              Baixar curriculo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
