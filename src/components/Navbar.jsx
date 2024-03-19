import mtg from "../assets/images/magic-logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-900 p-1">
      <div className="ml-6">
        <Link to="/">
          <img src={mtg} alt="logo" className="w-[50%]" />
        </Link>
      </div>
      <div className="mr-4 mt-3">
        <button type="button" className="text-white">
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
