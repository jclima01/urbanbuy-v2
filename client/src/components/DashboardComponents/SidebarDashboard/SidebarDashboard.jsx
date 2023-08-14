import { CiHome, CiUser, CiEdit, CiPenpot, CiSettings } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
// import PropTypes from 'prop-types';

const SideBarDashBoard = ({ isActive, handleIsActiveHover }) => {
  const handleLogout = () => {};

  return (
    <div className="bg-[#323131] flex justify-center flex-row w-screen py-2 px-2 md:w-fit md:flex-col md:h-full lg:px-10 md:pt-36 md:justify-evenly">
      {/* <div className="logo hidden md:flex md:self-center md:justify-start ">
          <Link to="/dashboard" onClick={() => handleIsActiveHover("Home")}>
            <img src={logo} alt="" className="imagenlogo" />
          </Link>
        </div> */}
      <ul className="sticky bottom-0 left-0 flex md:flex-col justify-evenly items-center gap-y-4 ">
        <li
          onClick={() => handleIsActiveHover("Home")}
          className={`${
            isActive === "Home" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <CiHome size={25} />
        </li>
        {/* <li
          onClick={() => handleIsActiveHover("User")}
          className={`${
            isActive === "User" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <CiUser size={25} />
        </li> */}
        {/* <li
          onClick={() => handleIsActiveHover("Edit")}
          className={`${
            isActive === "Edit" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <CiEdit size={25} />
        </li> */}
        <li
          onClick={() => handleIsActiveHover("Products")}
          className={`${
            isActive === "Products" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <CiPenpot size={25} />
        </li>
        {/* <li
          onClick={() => handleIsActiveHover("Shipping")}
          className={`${
            isActive === "Shipping" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <BsGraphUpArrow size={25} />
        </li>
        <li
          onClick={() => handleIsActiveHover("Settings")}
          className={`${
            isActive === "Settings" ? "selectedSidebarButton" : "sidebarButton"
          } cursor-pointer`}
        >
          <CiSettings size={25} />
        </li> */}
      </ul>

      <div
        onClick={handleLogout}
        className="sidebarButton cursor-pointer hidden  w-fit self-center md:inline"
      >
        <RiLogoutCircleRLine size={25} />
      </div>
    </div>
  );
};

export default SideBarDashBoard;
