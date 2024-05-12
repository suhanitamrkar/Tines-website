import React from "react";

const Mission = () => {
  return (
    <div className="h-[900px] w-full sm:py-[4rem] py-0  bg-[#2A2831]  lg:flex lg:flex-row  sm:items-center justify-center sm:flex sm:flex-col">
      <div className="w-[40%] lg:ml-[10rem] sm:ml-0 sm:w-full  text-[#D2C0F4] p-6 relative">
        <div className="h-[5rem] w-[5rem]  object-cover absolute top-5 right-6 ">
          <img
            className="rounded-full"
            src="https://www.tines.com/static/tines-photo-icon-eoin-hinchy-ec5d4595935c234d77ee92f4369e95de.jpg"
          />
          <h1 className="bg-[#8578E6] text-white rounded-xl text-center px-1  ">
            EOIN
          </h1>
        </div>
        <h1>HOW IT STARTED</h1>
        <h1 className="font-[Lora] text-5xl py-8 line-clamp-3">
          <span className="block"> Born in security,</span> used by everyone.
        </h1>
        <p className="text-white text-lg">
          Before Tines, our founders, Eoin and Thomas spent more than a decade
          as senior security operators, experiencing all of the usual pain
          points felt within and beyond security teams: too much work; not
          enough staff; inevitable incidents. They knew there needed to be a
          laser-focused solution, so in 2018 they started building Tines.
        </p>
      </div>
      <div className="bg-[#D7C4FA] sm:w-[90%]  rounded-lg p-10   sm:mr-0     lg:mr-[10rem] relative ">
        <h1 className="text-[#4D3E78] ">OUR MISSION</h1>
        <h1 className="text-[#4D3E78] text-5xl pt-5 font-bold line-clamp-4 ">
          To power the <span className="block">world’s most</span>{" "}
          <span className="block">important</span>
          <span className="block">workflows.</span>
        </h1>
        <div className="absolute bottom-6 sm:relative sm:py-10">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7899 45.0135L8.00586 38.8928L28.0164 31.949L46.8006 38.0699L26.7899 45.0135Z"
              fill="#D67C56"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.6198 47.6488L0.835938 41.5281L20.8463 34.5845L39.6303 40.7052L19.6198 47.6488Z"
              fill="#FFE1B3"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M46.8007 38.0698L26.79 45.0135L26.7102 45.1889L19.6208 47.6491L5.26562 79.2982L12.4347 76.6624L46.8007 38.0698Z"
              fill="#D67C56"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M41.1306 1L33.9615 3.6358L0.835938 41.5284L20.8463 34.5847L20.9197 34.411L28.0155 31.9489L41.1306 1Z"
              fill="#D67C56"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M0.835938 41.5283L20.8463 34.5847L33.9615 3.63574L0.835938 41.5283Z"
              fill="#FFD18C"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.6208 47.649L39.6313 40.7053L5.26562 79.2981L19.6208 47.649Z"
              fill="#FFD18C"
              stroke="#32274B"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.3984 34.6103L26.6933 36.5612L33.6603 33.7744L28.0143 31.949L21.3984 34.6103Z"
              fill="#32274B"
            ></path>
            <path
              d="M13.0753 76.3499L5.09277 79.814C7.09692 79.9329 9.34931 80.0001 11.7316 80.0001C20.0716 80.0001 26.8325 79.1812 26.8325 78.1712C26.8327 77.216 20.7854 76.4323 13.0753 76.3499Z"
              fill="#32274B"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Mission;
