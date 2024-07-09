import logo from "../assets/logo.png";
// import { navLinks } from "../constants/data";
import { useState } from "react";

import { NavLink } from "react-router-dom";

function Header() {
  const menuBtn = <i className="fa-solid fa-bars text-xl text-white"></i>;
  const closeBtn = <i className="fa-solid fa-xmark text-xl text-white"></i>;

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="bg-slate-800">
      <div className="flex h-14 justify-between items-center">
        <div className="px-6">
          <img src={logo} alt="logo" className="w-8" />
        </div>
        {/* <nav className="hidden">
          <ul className="flex gap-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className= px-2 py-1" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
        <div className="px-3 absolute right-1">
          <button onClick={toggleMenu}>{menuOpen ? closeBtn : menuBtn}</button>
        </div>
        {menuOpen && (
          <div className=" flex w-full justify-center">
            <ul className="flex gap-4">
              <li>
                <NavLink 
                to="/"
                className={({isActive}) => `text-white ${isActive ? "bg-green-500 px-2 py-1" : "text-white"}` }
                >
                  Home
                </NavLink>
              </li>
              {/* {navLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))} */}
              <li>
                <NavLink
                to="/about"
                className={({isActive}) => `text-white ${isActive ? "bg-green-500 px-2 py-1" : "text-white"}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="/work"
                className={({isActive}) => `text-white ${isActive ? "bg-green-500 px-2 py-1" : "text-white"}`}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="/category"
                className={({isActive}) => `text-white ${isActive ? "bg-green-500 px-2 py-1" : "text-white" }`}
                >
                  Category
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </header>
  );
}

export default Header;
