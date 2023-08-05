import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <main className="relative w-full  h-screen flex flex-col items-center justify-evenly  box-border bg-[#323131] ">
      <div className="customBackground2 flex flex-col items-center justify-center ">
        <div className="bg-[#D9D9D9] w-fit flex flex-col gap-y-4 box-border p-5 justify-center items-center z-10 rounded-md">
          <span className="text-[#B26E07] font-semibold text-3xl">LOGIN</span>
          <input
            type="text"
            placeholder="Nombre de usuario o email"
            className="bg-[#323131] px-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Contraseña"
            className="bg-[#323131] px-2 rounded-md"
          />
          <button className="loginButton">Inicio de sesión</button>
          <br />
          <p className="text-gray-800">
            Si aun no tienes cuenta te invitamos a registrarte{" "}
            <Link to="/singin" className="text-blue-700">
              aqui
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
