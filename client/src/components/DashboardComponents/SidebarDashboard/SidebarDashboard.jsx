import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { CiHome, CiUser, CiEdit, CiPenpot, CiSettings } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
const SideBarDashBoard = ({ isActive, handleIsActiveHover }) => {
  const handleLogout = () => {};

  return (
    <div className="flex w-48 h-screen  flex-col justify-between items-center p-3">
      <div className="logo">
        <Link to="/dashboard" onClick={() => handleIsActiveHover("Home")}>
          <img src={logo} alt="" className="imagenlogo" />
        </Link>
      </div>
      <ul className="flex flex-col justify-evenly items-center gap-y-4 ">
        <li
          onClick={() => handleIsActiveHover("Home")}
          className={`${
            isActive === "Home" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <CiHome size={30} />
        </li>
        <li
          onClick={() => handleIsActiveHover("User")}
          className={`${
            isActive === "User" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <CiUser size={30} />
        </li>
        <li
          onClick={() => handleIsActiveHover("Edit")}
          className={`${
            isActive === "Edit" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <CiEdit size={30} />
        </li>
        <li
          onClick={() => handleIsActiveHover("Products")}
          className={`${
            isActive === "Products" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <CiPenpot size={30} />
        </li>
        <li
          onClick={() => handleIsActiveHover("Shipping")}
          className={`${
            isActive === "Shipping" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <BsGraphUpArrow size={30} />
        </li>
        <li
          onClick={() => handleIsActiveHover("Settings")}
          className={`${
            isActive === "Settings" ? "primaryButton" : "secondaryButton"
          } cursor-pointer`}
        >
          <CiSettings size={30} />
        </li>
      </ul>

      <div onClick={handleLogout}>
        <div className="mb-5 btn cursor-pointer ">
          <RiLogoutCircleRLine size={30} />
        </div>
      </div>
    </div>
  );
};

export default SideBarDashBoard;
