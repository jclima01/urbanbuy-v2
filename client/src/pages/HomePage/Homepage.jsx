import React from "react";
import image1 from "../../assets/image1.svg";
import dots from "../../assets/dots.svg";
import NavHomePage from "../../components/NavHomePage";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#1E1E1E] ">
      <header className="relative flex flex-col w-full h-full box-border">
        <div className="absolute h-[600px] customBackground z-0"></div>
        <img src={dots} className="absolute right-10"></img>
        <NavHomePage />

        <h1 className="text-8xl w-3/5 p-20 z-10 overflow-hidden">
          Tu tienda con un solo click, desde donde estes
        </h1>
      </header>
    </div>
  );
};

export default Homepage;
