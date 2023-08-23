import { useState } from "react";
import SideBarDashBoard from "../../components/DashboardComponents/SidebarDashboard/SidebarDashboard";
import HomeDashboard from "../../components/DashboardComponents/HomeDashboard/HomeDashboard";
import UsersDashboard from "../../components/DashboardComponents/UsersDashboard/UsersDashboard";
import EditDashboard from "../../components/DashboardComponents/EditDashboard/EditDashboard";
import ProductsDashboard from "../../components/DashboardComponents/ProductsDashboard/ProductsDashboard";
import ShippingDashboard from "../../components/DashboardComponents/ShippingDashboard/ShippingDashboard";
import SettingsDashboard from "../../components/DashboardComponents/SettingsDashboard/SettingsDashboard";
import NavbarDashboard from "../../components/DashboardComponents/NavbarDashboard/NavbarDashboard";

const Dashboard = () => {
  const [isActive, setIsActive] = useState("Home");
  const handleIsActiveHover = (value) => {
    setIsActive(value);
  };
  return (
    <div className="w-full h-screen">
      <NavbarDashboard />
      <main className="w-full h-full flex-grow flex flex-col-reverse md:flex-row text-gray-900 gap-x-2">
        <SideBarDashBoard
          isActive={isActive}
          setIsActive={setIsActive}
          handleIsActiveHover={handleIsActiveHover}
        />
        {isActive === "Home" && <HomeDashboard />}
        {/* {isActive === "User" && <UsersDashboard />} */}
        {/* {isActive === "Edit" && <EditDashboard />} */}
        {isActive === "Products" && <ProductsDashboard />}
        {/* {isActive === "Shipping" && <ShippingDashboard />} */}
        {/* {isActive === "Settings" && <SettingsDashboard />} */}
      </main>
    </div>
  );
};

export default Dashboard;
