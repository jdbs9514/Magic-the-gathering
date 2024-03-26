import mtg from "../assets/images/magic-logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between bg-zinc-900 p-1">
      <div className="ml-6">
        <Link to="/">
          <img src={mtg} alt="logo" className="w-[50%]" />
        </Link>
      </div>
      <div className="sm:flex hidden">
        <ul className="lg:flex gap-8 mr-8 md:flex md:gap-8 md:mr-8 sm:hidden">
          <li className="text-white mt-6 font-bold text-xl cursor-pointer hover:scale-125 hover:text-blue-400">
            <Link to="https://en.wikipedia.org/wiki/Magic:_The_Gathering">Information</Link>
          </li>

          <li className="text-white mt-6 font-bold text-xl cursor-pointer hover:scale-125 hover:text-blue-400">
            <Link to="https://magic.wizards.com/es">Magic Official</Link>
          </li>

        </ul>
      </div>
      {isOpen ? (
        <div>
          <div className="flex justify-end mr-4 mt-3">
            <button
              type="button"
              onClick={handleClick}
              className="text-white hover:animate-spin"
            >
              <i className="fa-solid fa-x" />
            </button>
          </div>
          <div>
            <ul className="absolute right-0 mt-5 mr-5 p-10 bg-zinc-900 opacity-75 rounded-lg shadow-lg shadow-zinc-900/40">
              <li className="text-white mt-6 text-xl cursor-pointer hover:scale-125 hover:text-blue-400">
                <Link to="https://en.wikipedia.org/wiki/Magic:_The_Gathering">Information</Link>
              </li>
              <li className="text-white mt-6 text-xl cursor-pointer hover:scale-125 hover:text-blue-400">
                <Link to="https://magic.wizards.com/es">Magic Official</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="mr-4 mt-3 md:hidden">
          <button
            type="button"
            className="text-white lg:hidden hover:animate-spin"
            onClick={handleClick}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
