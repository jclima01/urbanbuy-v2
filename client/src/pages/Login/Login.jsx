import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const Login = () => {

  const [dataUser, seData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    seData({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const { setLocalStorageUser, auth } = useContext(AuthContext);

  const { status } = auth;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:2800/clientAdmin/login",
      dataUser
    );

    setLocalStorageUser(res.data);

    status === "authenticated" ? (window.location = "/dashboard") : (window.location = "/login");
  };

  return (
    <main className="relative w-full  h-screen flex flex-col items-center justify-evenly  box-border bg-[#ccbebe] ">
      <div className="customBackground2 flex flex-col items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-[#D9D9D9] w-fit flex flex-col gap-y-4 box-border p-5 justify-center items-center z-10 rounded-md"
        >
          <span className="text-[#B26E07] font-semibold text-3xl">LOGIN</span>
          <input
            type="text"
            placeholder="Nombre de usuario o email"
            className="bg-[#323131] px-2 rounded-md"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Contraseña"
            className="bg-[#323131] px-2 rounded-md"
            name="password"
            onChange={handleChange}
          />
          <button type="submit" className="loginButton">
            Inicio de sesión
          </button>
          <br />
          <p className="text-gray-800">
            Si aun no tienes cuenta te invitamos a registrarte{" "}
            <Link to="/singin" className="text-blue-700">
              aqui
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
