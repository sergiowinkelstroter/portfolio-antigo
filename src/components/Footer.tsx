import Image from "next/image";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

export const Footer = () => {
  function handleTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="border-t-2 border-blue-600 shadow-xl flex flex-col">
      <div className="flex  justify-between items-center m-7">
        <div className="hidden md:block">
          <Image src="/logo.png" width={100} height={100} alt="" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="hover:text-blue-600">
              <a href="https://github.com/sergiowinkelstroter" target="_blank">
                <AiFillGithub size={32} />
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                target="_blank"
              >
                <AiFillLinkedin size={32} />
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a
                href="https://www.instagram.com/winkelstrotersergio/"
                target="_blank"
              >
                <AiFillInstagram size={32} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button
            onClick={handleTop}
            className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-900"
          >
            <AiOutlineArrowUp size={24} />
          </button>
        </div>
      </div>
      <div className="mx-auto mb-8">
        <p className="text-sm">©All right reserved</p>
      </div>
    </div>
  );
};
