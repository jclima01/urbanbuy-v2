const products = [
  {
    id: "1",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "2",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "3",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "4",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "5",
    name: "jc",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
];

const ProductsDashboard = ({ clientAdmin }) => {
  return (
    <section className="w-full  mt-[150px] px-2 flex flex-col items-start gap-y-5  box-border overflow-hidden">
      <header className="w-full md:flex  items-center justify-center  gap-y-5 gap-x-5 ">
        <div className="box w-full h-fit md:w-fit md:h-full flex flex-col justify-center items-center m-2">
          <span className="font-bold">Productos Totales</span>
          <span className="font-semibold">10</span>
        </div>
        <div className="box flex flex-col h-fit md:h-full text-gray-100 bg-[#B26E07] flex-grow m-2">
          <span>Categorías:</span>
          {products?.map((product) => (
            <span className="">{clientAdmin?.category}</span>
          ))}
        </div>
        <div className="w-full md:w-fit flex flex-col items-center justify-center gap-y-2">
          <button className="secondaryButton"> Agregar Producto</button>
          <button className="secondaryButton"> Editar Categorías</button>
        </div>
      </header>

      <form className="flex w-full gap-x-5 items-center justify-center ">
        <button className="secondaryButton">Seleccione</button>
        <input
          type="text"
          className="searchInput"
          placeholder="Buscar producto"
        />
      </form>
      <div className="box w-full h-[280px] lg:h-[400px] overflow-y-scroll ">
        <ul className="w-full bg-[#D9D9D9] rounded-md p-3 flex flex-col gap-y-4 justify-center ">
          {products?.map((product, i) => (
            <li
              key={product.id}
              className={`flex flex-row  items-center  rounded-md p-2 border-[4px] ${
                i % 2 === 0 && "bg-[#FFFFFF]"
              }`}
            >
              <img
                src={product.image}
                alt=""
                className="w-8 rounded-full h-auto"
              />
              <span className="w-1/4 ">{product.name}</span>
              <span className="w-1/4 ">Categoría</span>
              <span className="w-1/4 font-semibold">{product.price}</span>
              <div className="w-1/4 flex flex-col items-center">
                <button className="secondaryButton">Borrar</button>

                <button className="primaryButton">Editar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsDashboard;
