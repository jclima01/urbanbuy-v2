import React from "react";
import image2 from "../../../assets/image2.svg";
const HomeDashboard = () => {
  return (
    <main
      className={`w-full h-full flex flex-col pt-[133px] text-2xl box-border`}
    >
      <div className="flex flex-col max-w-[600px] gap-y-5 p-8 justify-between rounded-lg border shadow-black shadow-2xl box-content">
        <h1 className="font-extrabold">Urbanbuy</h1>
        <h3 className="font-semibold">Ecommerce</h3>
        <p className="opacity-90 text-md">
          El dominio es la dirección única de tu tienda en línea. Registra un
          dominio para que los clientes puedan acceder fácilmente a tu tienda.
        </p>
        <div className="flex gap-x-5 flex-wrap gap-y-4">
          <input
            type="text"
            placeholder="Ej: Foodie"
            className="bg-[#323131] px-2 rounded-md md:flex-grow"
          />
          <button className="primaryButton">Agregar</button>
        </div>
      </div>
      <section></section>
    </main>
  );
};

export default HomeDashboard;
