import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 text-white flex items-center justify-between px-4  lg:px-8 py-4 md:py-2 lg:py-2 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 transition duration-500 ease-in-out">
      <a href="#">
        <h1 className="font-bold hover:text-mantis-400 text-2xl">
          Bryan <span className="text-mantis-400">Martinez</span>
        </h1>
      </a>

      
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

     
      <ul
        className={`${
          isOpen ? "block bg-black " : "hidden"
        } absolute bg-opacity-70  backdrop-blur-md top-12 left-0 right-0 flex flex-col items-center justify-center md:static md:flex md:flex-row md:items-center md:justify-center font-bold transition-transform duration-500 ease-in-out`}
      >
        <li className="py-3 p-5 xl:p-6 md:py-0">
          <a href="#perfil" className="hover:text-mantis-400">
            Inicio
          </a>
        </li>
        <li className="py-3 p-5 xl:p-6 md:py-0">
          <a href="#proyectos" className="hover:text-mantis-400">
            Proyectos
          </a>
        </li>
        <li className="py-3 p-5 xl:p-6 md:py-0">
          <a href="#tecnologias" className="hover:text-mantis-400">
            Contacto
          </a>
        </li>
      </ul>
    </header>
  );
}


export default NavBar;
