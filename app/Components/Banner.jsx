import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#2A2831] h-[40rem] w-full p-[10rem]  font-[Lora] text-white">
        <h1 className=" text-center">ABOUT US</h1>
        <h1 className="text-center text-7xl tracking-tight">
          <span className="block">Smart, secure workflows</span>
          <span>
            for the<em> whole</em> team
          </span>
        </h1>
        <p className="text-center  text-bold text-md p-5 leading-6">
          <span className="block">
            {" "}
            We believe that by combining automation and human
          </span>{" "}
          <span className="block">
            ingenuity, organizations will be more efficient, more secure and
          </span>{" "}
          <span className="block">have more engaged, happier teams.</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
