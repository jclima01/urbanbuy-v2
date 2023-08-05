import logo from "../../assets/logo.svg";
import userIcon from "../../assets/userIcon.svg";
import { Link } from "react-router-dom";

const NavHomePage = () => {
  return (
    <nav className="lg:sticky top-0 left-0 w-full  flex flex-col  md:flex-row justify-between items-center box-border z-10 ">
      <div className="absolute customBackground md:hidden z-0"></div>
      <div className="z-10  w-full px-10 flex flex-col gap-y-14  sm:flex-row justify-between items-center box-border py-10  bg-[#1e1e1e59] md:bg-[#1e1e1e]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/suscribe" className="primaryButton">
          Suscribe
        </Link>

        <Link to="/contact" className="secondaryButton">
          Contacto
        </Link>
        <Link to="/login">
          <img src={userIcon} alt="usericon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavHomePage;
