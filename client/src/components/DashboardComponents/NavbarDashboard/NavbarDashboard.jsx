import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import logout from "../../../assets/logout.svg";
const NavbarDashboard = () => {
  return (
    <nav className="fixed flex flex-col md:flex-row md:w-full gap-y-3 py-3 w-full bg-[#323131] justify-between md:justify-start items-center px-4 md:px-12 md:py-8">
      <div className="flex w-full md:w-fit justify-between">
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
      <img src={logout} alt="" className="md:hidden" />
      </div>
      <h1 className="text-3xl md:pl-10">
        Today <span className="font-extrabold text-[#FB9803] ">Dashboard</span>
      </h1>
    </nav>
  );
};

export default NavbarDashboard;
