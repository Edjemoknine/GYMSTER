import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronDoubleUp } from "react-icons/bs";
const Header = () => {
  const navigate = useLocation();

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsScroll(true) : setIsScroll(false);
    });
  });
  // const navigate = true;
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Exercices", href: "/exercices" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div
      style={{ background: `${isScroll ? "rgba(0,0,0,.7)" : ""}` }}
      className={`${
        isScroll ? "bg-black/70 shadow-2xl" : ""
      } w-full bg-transparent z-50 py-2  fixed top-0 left-0`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-4xl font-black text-sky-500">
          GYMSTER
        </div>
        <ul className="hidden md:flex bg-gray-900 px-16 py-6 items-center space-x-6 ">
          {links.map((link) => (
            <Link
              to={link.href}
              className={`
            ${
              navigate.pathname === link.href
                ? "font-semibold text-sky-500"
                : "text-white"
            }
            hover:text-sky-500 transition-all cursor-pointer`}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group md:hidden cursor-pointer flex flex-col items-center justify-between  p-2 h-10 w-10 "
        >
          <p
            className={`${
              isOpen ? "-rotate-45 translate-y-3" : ""
            } h-1 w-8 rounded-xl group-hover:bg-sky-500 bg-white transition-all duration-300`}
          ></p>
          <p
            className={`${
              isOpen
                ? "hidden"
                : "flex h-1 w-8 group-hover:bg-sky-500 rounded-xl transition-all duration-300 bg-white"
            }`}
          ></p>
          <p
            className={`${
              isOpen ? "rotate-45 -translate-y-2" : ""
            } h-1 w-8 rounded-xl group-hover:bg-sky-500 bg-white transition-all duration-300`}
          ></p>
        </div>
        {/* {isMobile && ( */}
        <ul
          className={`${
            isOpen ? "top-full z-50" : "-top-[700%]"
          } flex absolute right-10 z-50 rounded-lg items-center transition-all duration-300 flex-col space-y-3 bg-sky-700 w-60 h-64 justify-center `}
        >
          {links.map((link) => (
            <Link
              to={link.href}
              className={`
              ${navigate.pathName === link.href ? "text-sky-500" : "text-white"}
              hover:text-sky-500 z-50 transition-all cursor-pointer`}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        {/* )} */}
      </nav>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          isScroll ? "bottom-6" : "-bottom-10"
        } fixed transition-all group hover:scale-110 border-2 select-none text-sky-500 cursor-pointer p-1 border-sky-500 duration-300  right-6`}
      >
        <BsChevronDoubleUp className="group-hover:scale-150 transition" />
      </div>
    </div>
  );
};

export default Header;
