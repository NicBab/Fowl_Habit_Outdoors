import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../../assets/index/assets.index";
import { navLinks } from "../../constants/nav-data/nav-data.js";
import { Social } from "../../components/index/components.index";
import styles from "../../style.js"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${styles.text} cursor-pointer text-[30px] text-dimWhite
            ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-white`}
          >
            <Link to={`${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-start">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 left-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar `}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-council text-[25px] tracking-widest cursor-pointer text-dimWhite hover:text-white
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
            >
              <Link to={`${nav.path}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Social />
    </nav>
  );
};

export default Navbar;
