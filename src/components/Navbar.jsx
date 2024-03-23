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
      {isOpen ? (
        <div>
          <div className="flex justify-end mr-4 mt-3">
            <button type="button" onClick={handleClick} className="text-white hover:animate-spin">
              <i className="fa-solid fa-x" />
            </button>
          </div>
          <div>
            <ul className="absolute right-0 mt-5 mr-5 p-10 bg-zinc-900 opacity-75 rounded-lg">
              <li className="text-white mt-6 font-bold text-xl cursor-pointer hover:scale-125">Information</li>
              <li className="text-white mt-6 font-bold text-xl cursor-pointer hover:scale-125">Home</li>
              <li className="text-white mt-6 font-bold text-xl cursor-pointer hover:scale-125">Contac</li>
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
