import React from "react";
const products = [
  {
    id: "1",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
];
const ProductsDashboard = ({ clientAdmin }) => {
  return (
    <section className="w-full h-full pt-[133px] p-10 flex flex-col gap-y-5 overflow-y-scroll">
      <header className="w-full flex flex-col md:flex-row items-center justify-center  gap-x-10 ">
        <div className="box w-full h-full md:w-fit flex flex-col justify-center items-center">
          <span className="font-bold">Productos Totales</span>
          <span className="font-semibold">10</span>
        </div>
        <div className="box flex flex-col w-full h-full text-gray-100 bg-[#B26E07] flex-grow ">
          <span>Categorías:</span>
          {products?.map((product) => (
            <span className="">{clientAdmin?.category}</span>
          ))}
        </div>
        <div className=" w-full md:w-fit flex flex-col items-center justify-center gap-y-2">
          <button className="secondaryButton"> Agregar Producto</button>
          <button className="secondaryButton"> Editar Categorías</button>
        </div>
      </header>

      <nav className="flex gap-x-5">
        <button className="secondaryButton">Seleccione</button>
        <input
          type="text"
          className="searchInput"
          placeholder="Buscar producto"
        />
      </nav>
      <div className="box flex w-full h-full items-start justify-center ">
        {products?.map((product) => (
          <div
            key={product.id}
            className="box w-full h-fit flex justify-center items-center"
          >
            <span className="font-bold">{product.name}</span>
            <span className="font-semibold">{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsDashboard;
