import React from "react";
import Style from "../styles/Navbar/Navbar.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const navList = document.getElementById("nav-lists");
    // sideMenu ? setSideMenu(false) : setSideMenu(true);
    console.log(navList);
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  }
  return (
    <nav className="bg-black">
      <div className="container m-auto flex items-center justify-between ">
        <div className="font-mono text-xl m-4 p-3 nav-logo  whitespace-nowrap w-min bg-gradient-to-r from-red-100 to-red-300 rounded-full animate-pulse cursor-pointer">
          Anish Shrestha
        </div>
        <ul
          id="nav-lists"
          className={`${
            sideMenu ? Style.showMenu : Style.hideMenu
          } nav-lists  grid absolute w-3/4 h-full gap-2 sm:static sm:flex sm:w-4/5 items-center justify-around sm:rounded-full bg-gradient-to-r from-red-400 to-green-300 cursor-pointer z-10`}
        >
          <li className="hover:text-yellow-200 hover:animate-bounce active">
            Home
          </li>
          <li className="hover:text-yellow-200 hover:animate-bounce">Photos</li>
          <li className="hover:text-yellow-200 hover:animate-bounce">
            About me
          </li>
          <li className="hover:text-yellow-200 hover:animate-bounce">
            Services
          </li>
          <li className="hover:text-yellow-200 hover:animate-bounce">
            Projects
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="block sm:hidden ml-auto bg-blue-200 active:bg-blue-400"
        >
          <img className="w-14" src="hamburgerMenu.png" alt="hamburger menu" />
        </button>
      </div>
    </nav>
  );
}
