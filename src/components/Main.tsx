import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div className="mb-14 group">
          <h1 className="mb-1 font-mono text-3xl  md:text-6xl">
            Ola, eu <br className="block md:hidden" />
            <span>sou o Sergio 👋</span>
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-blue-600 md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>
          <div className="text-lg font-semibold md:text-3xl">
            Desenvolvedor <span className="text-blue-600">Front-end</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="hover:text-blue-600">
              <a
                href="https://github.com/sergiowinkelstroter"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={32} />
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={32} />
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a
                href="https://www.instagram.com/winkelstrotersergio/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
