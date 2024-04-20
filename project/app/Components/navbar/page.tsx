import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/vector/default-monochrome-white.svg";

const Navbar = () => {
  return (
    <div className="navbar h-20 bg-[#100f39] pr-8 flex justify-center items-center">
      <div className="flex-1">
        <a href="#home" className="btn btn-ghost text-xl text-slate-200">
          <Image
            className=" pt-2"
            src={logo}
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#landmarks" className="text-gray-200 font-extrabold">Забележителности</a>
          </li>
          <li>
            <a href="#hotels" className="text-gray-200 font-extrabold">Хотели</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
