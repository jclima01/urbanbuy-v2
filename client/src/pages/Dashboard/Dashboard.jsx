import { useState } from "react";
import SideBarDashBoard from "../../components/DashboardComponents/SidebarDashboard/SidebarDashboard";
import HomeDashboard from "../../components/DashboardComponents/HomeDashboard/HomeDashboard";
import UsersDashboard from "../../components/DashboardComponents/UsersDashboard/UsersDashboard";

const Dashboard = () => {
  const [isActive, setIsActive] = useState("Home");
  const handleIsActiveHover = (value) => {
    setIsActive(value);
  };
  return (
    <div className="flex w-full items-start justify-start">
      <SideBarDashBoard isActive={isActive} setIsActive={setIsActive} handleIsActiveHover={handleIsActiveHover} />
      {isActive === "Home" && <HomeDashboard/>}
      {isActive === "User" && <UsersDashboard/>}
      {isActive === "Edit" && <UsersDashboard/>}
      {isActive === "Products" && <UsersDashboard/>}
      {isActive === "Shipping" && <UsersDashboard/>}
      {isActive === "Settings" && <UsersDashboard/>}
    </div>
  );
};

export default Dashboard;
