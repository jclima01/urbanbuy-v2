import NavHomePage from "./components/NavHomePage/NavHomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Homepage from "./pages/HomePage/Homepage";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Singin from "./pages/Singin/Singin";
import AuthContextProvider from "./context/Auth";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-full flex justify-between items-center flex-col text-gray-300 font-sans ">
      {pathname !== "/dashboard" &&
        pathname !== "/login" &&
        pathname !== "/singin" && <NavHomePage />}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/singin" element={<Singin />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
