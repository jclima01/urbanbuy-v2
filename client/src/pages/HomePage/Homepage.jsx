import dots from "../../assets/dots.svg";
import servicio1 from "../../assets/servicio1.svg";
import logo from "../../assets/logo.svg";
import Footer from "../../components/Footer/Footer";
const Homepage = () => {
  return (
    <div className="w-full max-w-[1366px] h-full flex flex-col">
      <header className=" flex flex-col w-full h-full box-border z-0">
        <div className="absolute py-10 sm:customBackground"></div>
        <img src={dots} className="hidden sm:block absolute right-10" ></img>
        <h1 className="text-5xl w-3/5 py-32 px-10 z-10 hidden sm:flex box-border ">
          Tu tienda con un solo click, desde donde estes
        </h1>
      </header>
      <section className="relative w-full h-full flex flex-col py-10">
        <img src={dots} className="absolute top-10 left-10"></img>

        <div className="flex flex-col sm:flex-row gap-x-5 justify-center items-center pt-10 flex-wrap">
          <div className="flex flex-col items-center justify-between ">
            <img src={servicio1} className="w-32"></img>
            <h1>SEGURIDAD EN LINEA</h1>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <img src={servicio1} className="w-32"></img>
            <h1>SOPORTE</h1>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <img src={servicio1} className="w-32 "></img>
            <h1>INCREMENTO DE VENTAS</h1>
          </div>
        </div>
      </section>
      <section className="relative customBackground2 flex flex-col items-start justify-center flex-wrap">
        <div className="flex flex-col bg-[#18181899] rounded-md  sm:m-4  w-full  sm:w-[400px] h-[320px] p-8 items-center justify-evenly box-border">
          <img src={logo} alt="" />
          <p className="text-base sm:text-lg ">
            Tu plataforma de ventas ágil y confiable. UrbanBuy es mucho más que
            una simple plataforma de ventas en línea. Es un espacio diseñado
            para ofrecerte una experiencia completa y satisfactoria al vender
            tus productos. Nos enfocamos en brindarte una solución ágil y
            confiable, para que puedas alcanzar tus objetivos de negocio de
            manera efectiva.
          </p>
        </div>
        <img src={dots} className="absolute hidden sm:block top-10 right-10"></img>
      </section>
      <Footer/>
    </div>
  );
};

export default Homepage;
