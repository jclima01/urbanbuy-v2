import React from "react";
import image1 from "../../assets/image1.svg";
import dots from "../../assets/dots.svg";
import servicio1 from "../../assets/servicio1.svg";
import NavHomePage from "../../components/NavHomePage";
import logo from "../../assets/logo.svg";
import Footer from "../../components/Footer";
const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#1E1E1E] ">
      <header className="relative customBackground flex flex-col w-full h-full box-border">
        <img src={dots} className="absolute right-10"></img>
        <NavHomePage />

        <h1 className="text-5xl w-3/5 p-20 z-10 hidden md:flex ">
          Tu tienda con un solo click, desde donde estes
        </h1>
      </header>

      <section className="relative w-full h-full flex flex-col py-10">
        <img src={dots} className="absolute top-10 left-10"></img>

        <div className="flex gap-x-5 justify-center items-center pt-10 flex-wrap">
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
      <section className="relative customBackground2 flex items-center justify-start">
        <img src={dots} className="absolute top-10 right-10"></img>
        <div className="flex flex-col bg-[#181818] m-10 rounded-md w-[400px] p-10 box-border justify-evenly">
          <img src={logo} alt="" />
          <p>
            Tu plataforma de ventas ágil y confiable. UrbanBuy es mucho más que
            una simple plataforma de ventas en línea. Es un espacio diseñado
            para ofrecerte una experiencia completa y satisfactoria al vender
            tus productos. Nos enfocamos en brindarte una solución ágil y
            confiable, para que puedas alcanzar tus objetivos de negocio de
            manera efectiva.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Homepage;
