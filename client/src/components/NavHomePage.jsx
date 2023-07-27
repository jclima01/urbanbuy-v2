import React from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/userIcon.svg";

const NavHomePage = () => {
  return (
    <nav className="w-full px-20 text-white flex flex-col gap-y-16 md:flex-row justify-between items-center box-border py-5 z-10">
      <img src={logo} alt="logo" />
      <button className="primaryButton">Suscribe</button>
      <button className="secondaryButton">Contacto</button>
      <button>
        <img src={userIcon} alt="usericon" />
      </button>
    </nav>
  );
};

export default NavHomePage;
