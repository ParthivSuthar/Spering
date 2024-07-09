import logo from "../assets/logo.png";
import { navLinks } from "../constants/data";
import { useState } from "react";
import heroimg from "../assets/slider-img.png"

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
        <nav className="hidden">
          <ul className="flex gap-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className="text-black" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-3 absolute right-1">
          <button onClick={toggleMenu}>{menuOpen ? closeBtn : menuBtn}</button>
        </div>
        {menuOpen && (
          <div className=" flex w-full justify-center">
            <ul className="flex gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-full h-[300px]">
        <div className="grid grid-cols-2">
          <div className="w-full bg-slate-800 p-10 space-y-5">
            <h1 className="text-white text-2xl font-extrabold">YOU CAN HIRE FREELANCER HERE</h1>
            <p className="text-gray-300 text-balance">It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <div className="flex gap-4">
              <button className="px-3 py-2 bg-red-500 text-white">About Us</button>
              <button className="px-3 py-2 bg-white text-black">Get A Quote</button>
            </div>
          </div>
          <div className="w-full bg-cyan-400">
            <img src={heroimg} alt="hero-img" className=" h-80 w-full object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
