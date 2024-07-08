import logo from "../assets/logo.png"
import { navLinks } from "../constants/data"
import { useState } from "react"


function Header() {
  const menuBtn = <i className="fa-solid fa-bars text-xl text-white"></i>
  const closeBtn = <i className="fa-solid fa-xmark text-xl text-white"></i>

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu(){
    setMenuOpen(!menuOpen)
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
                <li key={index}><a className="text-black" href={link.href}>{link.label}</a></li>
              ))}
              </ul>
            </nav>
            <div className="px-3 absolute right-1">
              <button onClick={toggleMenu}>
                {menuOpen ? closeBtn : menuBtn}
              </button>
            </div>
            {menuOpen && (
              <div className=" flex w-full justify-center">
                <ul className="flex gap-4">
                  {navLinks.map((link, index) => (
                    <li key={index}><a className="text-white" href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            )}
            
        </div>
    </header>
  )
}

export default Header