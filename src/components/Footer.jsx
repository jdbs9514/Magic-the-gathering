import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-900 p-4">
      <div className="flex justify-between gap-4">
        <div className="flex justify-start">
          <p className="text-white mt-1 text-sm">
            <span>
              <i className="fa-regular fa-copyright" />{" "}
            </span>
            Copyright. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-white text-2xl">
            <Link to="https://github.com/jdbs9514">
              <i className="fa-brands fa-github" />
            </Link>
          </span>
          <span className="text-white text-2xl">
            <Link to="https://www.linkedin.com/in/macoin/">
              <i className="fa-brands fa-linkedin" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
