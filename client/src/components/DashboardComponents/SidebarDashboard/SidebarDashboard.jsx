import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { CiHome, CiUser, CiEdit, CiPenpot, CiSettings } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
const SideBarDashBoard = ({ isActive, handleIsActiveHover }) => {
  const handleLogout = () => {};

  return (
    <div className="absolute w-full lg:h-full flex flex-col left-0 bottom-0 items-center md:items-start p-3 md:left-0 md:top-0">
      <div className="flex flex-row md:flex-col justify-between md:h-screen ">
        <div className="logo hidden md:flex md:self-center md:justify-start ">
          <Link to="/dashboard" onClick={() => handleIsActiveHover("Home")}>
            <img src={logo} alt="" className="imagenlogo" />
          </Link>
        </div>
        <ul className="flex md:flex-col justify-evenly items-center gap-y-4 ">
          <li
            onClick={() => handleIsActiveHover("Home")}
            className={`${
              isActive === "Home" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <CiHome size={25} />
          </li>
          <li
            onClick={() => handleIsActiveHover("User")}
            className={`${
              isActive === "User" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <CiUser size={25} />
          </li>
          <li
            onClick={() => handleIsActiveHover("Edit")}
            className={`${
              isActive === "Edit" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <CiEdit size={25} />
          </li>
          <li
            onClick={() => handleIsActiveHover("Products")}
            className={`${
              isActive === "Products" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <CiPenpot size={25} />
          </li>
          <li
            onClick={() => handleIsActiveHover("Shipping")}
            className={`${
              isActive === "Shipping" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <BsGraphUpArrow size={25} />
          </li>
          <li
            onClick={() => handleIsActiveHover("Settings")}
            className={`${
              isActive === "Settings" ? "primaryButton" : "secondaryButton"
            } cursor-pointer`}
          >
            <CiSettings size={25} />
          </li>
        </ul>

        <div
          onClick={handleLogout}
          className="secondaryButton cursor-pointer hidden md:inline w-fit self-center"
        >
          <RiLogoutCircleRLine size={25} />
        </div>
      </div>
    </div>
  );
};

export default SideBarDashBoard;
