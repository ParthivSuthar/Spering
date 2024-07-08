import logo from "../assets/logo.png";
import { socialMedia } from "../constants/data";
import { navLinks } from "../constants/data";
import { contactDetails } from "../constants/data";

function Footer() {
  return (
    <footer className="bg-slate-800 px-6 py-6">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="footer-logo" className="w-8" />
        </div>
        <div>
          <ul className="flex gap-4">
            {socialMedia.map((link, index) => (
              <li key={index}>
                <img className="w-6" src={link.image} alt={link.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-10 grid grid-cols-4">
        <div>
          <h2 className="text-white font-extrabold text-xl">USEFUL LINK</h2>
          <div>
            <ul className="pt-3 text-gray-300">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-36">
          <h2 className="text-white font-extrabold text-xl">OFFICES</h2>
          <p className="pt-3 text-gray-300 text-pretty">
            Readable content of a page when looking at its layoutreadable
            content of a page when looking at its layout
          </p>
        </div>
        <div className="max-w-36">
          <h2 className="text-white font-extrabold text-xl">INFORMATION</h2>
          <p className="pt-3 text-gray-300 text-pretty">
            Readable content of a page when looking at its layoutreadable
            content of a page when looking at its layout
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-extrabold text-xl">NEWSLETTER</h2>
          <input type="email" placeholder="Email" className="p-2" />
          <button className=" text-white font-bold bg-red-400 self-start px-5 py-2 ">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="pt-6">
        <ul className="flex gap-x-11 items-center justify-center">
          {contactDetails.map((dets, index) => (
            <li
              className=" flex items-center justify-center gap-2 text-gray-300 text-pretty"
              key={index}
            >
              <img src={dets.image} alt="contact-logo" className="w-6 h-6" />
              {dets.detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-6">
        <p className="text-gray-300 text-pretty text-center">© 2024 All Rights Reserved By Free Html Templates</p>
      </div>
    </footer>
  );
}

export default Footer;
