import logo from "../../assets/logo.svg";
import dots from "../../assets/dots.svg";
import userIcon from "../../assets/userIcon.svg";
import { Link } from "react-router-dom";

const NavHomePage = () => {
  return (
      <nav className="lg:fixed top-0 left-0 w-full px-10 flex flex-col gap-y-8 sm:flex-row justify-between items-center box-border pt-10 z-10 bg-[#1e1e1ee7]">
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
      </nav>
  );
};

export default NavHomePage;
