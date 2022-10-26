import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeButton } from "./ThemeButton";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3] dark:bg-[#1f2937]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo.png"
            width={120}
            height={90}
            className="hover:opacity-80 hover:cursor-pointer"
          />
        </Link>
        <nav>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Sobre
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Skills
              </li>
            </Link>
            <Link href="/projetos">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Projetos
              </li>
            </Link>
            <Link href="/#contato">
              <li className="ml-10 text-sm uppercase hover:text-blue-600">
                Contato
              </li>
            </Link>
            <li className="ml-3">
              <ThemeButton />
            </li>
          </ul>
        </nav>
        <div className="md:hidden" onClick={handleNav}>
          <GiHamburgerMenu size={28} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1f2937] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a href="">
                  <Image src="/logo.png" width={70} height={70} />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <AiOutlineClose size={22} />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col mt-6">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Sobre
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/projetos">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projetos
                </li>
              </Link>
              <Link href="/#contato">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contato
                </li>
              </Link>
              <li className="">
                <ThemeButton />
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/sergiowinkelstroter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sergio-winkelstroter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/winkelstrotersergio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
