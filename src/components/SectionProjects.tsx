import { ProjectItem } from "./ProjectItem";
import GaleriaImage from "/public/assets/galeria.png";
import ChatAppImage from "/public/assets/chatApp.png";
import ShoppingCartImage from "/public/assets/home-shopping.png";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const data = [
  {
    id: "1",
    title: "Shopping Cart",
    image: ShoppingCartImage,
    description:
      "Projeto desenvolvido em ReactJS, com o objetivo de aprimorar meus conhecimentos em ContextAPI e useReducer ",
    repo: "https://github.com/sergiowinkelstroter/shopping-cart",
    demo: "https://shopping-cart-winkelstrotersergio.vercel.app/",
  },
  {
    id: "3",
    title: "Galeria de fotos",
    image: GaleriaImage,
    description:
      "Projeto desenvolvido em ReactJS, utlizando typescript e firebase.",
    repo: "https://github.com/sergiowinkelstroter/gallery",
    demo: "https://gallery-tan-nu.vercel.app/",
  },
  {
    id: "15",
    title: "Chat App",
    image: ChatAppImage,
    description:
      "Um aplicativo de bate-papo full-stack usando ReactJs no front-end e Firebase para a tecnologia de back-end. ",
    repo: "https://github.com/sergiowinkelstroter/chat-app",

    demo: "https://chat-app-winkelstrotersergio.vercel.app/",
  },
];

export const SectionProjects = () => {
  return (
    <div
      id="projetos"
      className="w-full flex flex-col justify-center  text-center"
    >
      <div className="max-w-[1240px] flex flex-col m-auto px-2 py-16 w-full ">
        <h1 className="">Projetos</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center">
          {data.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              demo={project.demo}
              repo={project.repo}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 m-auto hover:text-blue-600 transition-colors">
          <Link href={"/projetos"}>Ver mais projetos</Link>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};
