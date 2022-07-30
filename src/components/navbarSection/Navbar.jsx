import { useState } from "react";
import "./Navbar.css";
import { GoThreeBars } from "react-icons/go";

const Navbar = ({ theme, setTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav className="flex justify-between items-center px-5 md:px-14 py-7 h-20">
      <div className="flex justify-between items-center">
        <h3 className="mr-5 font-bold font-mono text-lg">Paul</h3>
        <abbr title="Switch Mode">
          <div
            onClick={() => handleTheme()}
            className={
              theme
                ? "flex justify-start items-center gap-1 bg-white border-[3px] border-[#1BB6CB] rounded-full cursor-pointer relative"
                : "flex justify-start items-center gap-1 bg-gray-900 border-[3px] border-[#1BB6CB] rounded-full cursor-pointer relative"
            }
          >
            <span
              className={
                theme
                  ? "p-3 bg-main border-2 border-white rounded-full absolute right-0"
                  : "p-3 bg-main border-2 border-white rounded-full absolute left-0"
              }
            ></span>
            <span className=" text-[#1BB6CB]">🔆</span>
            <span className=" text-[#1BB6CB]">🌙</span>
          </div>
        </abbr>
      </div>

      <div className="md:flex justify-between items-center hidden">
        <ul className="flex justify-between items-center mr-10 text-sm">
          <a href="#hero">
            {" "}
            <li className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3">
              Home
            </li>{" "}
          </a>
          <a href="#service">
            {" "}
            <li className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3">
              Services
            </li>{" "}
          </a>
          <a href="#about">
            {" "}
            <li className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3">
              About
            </li>{" "}
          </a>
          <a href="#project">
            {" "}
            <li className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3">
              Projects
            </li>{" "}
          </a>
          <a href="#testimony">
            {" "}
            <li className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3">
              Testimonies
            </li>{" "}
          </a>
        </ul>
        <a href="#contact" className="btn">
          {" "}
          Contact{" "}
        </a>
      </div>

      <div
        className="md:hidden text-3xl p-3 cursor-pointer hover:text-main"
        onClick={() => handleToggle()}
      >
        <GoThreeBars />
      </div>

      {toggle ? (
        <div>
          <ul className="flex flex-col justify-start items-center text-white text-4xl font-bold  bg-slate-400  w-sreen h-full top-0 bottom-0 right-0 left-0 absolute z-10">
            <a href="#hero">
              {" "}
              <li
                className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
                onClick={() => handleToggle()}
              >
                {" "}
                Home{" "}
              </li>
            </a>
            <a href="#service">
              <li
                className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
                onClick={() => handleToggle()}
              >
                {" "}
                Services{" "}
              </li>
            </a>
            <a href="#about">
              <li
                className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
                onClick={() => handleToggle()}
              >
                {" "}
                About{" "}
              </li>
            </a>
            <a href="#project">
              <li
                className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
                onClick={() => handleToggle()}
              >
                {" "}
                Projects{" "}
              </li>
            </a>
            <a href="#testimony">
              <li
                className="transform duration-200 ease-in-out hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
                onClick={() => handleToggle()}
              >
                {" "}
                Testimonies{" "}
              </li>
            </a>
            <a
              href="#contact"
              className="transform duration-200 ease-in-out hover:text-main hover:scale-x-125 md:mr-1 lg:mr-3 my-7"
              onClick={() => handleToggle()}
            >
              Contact
            </a>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
