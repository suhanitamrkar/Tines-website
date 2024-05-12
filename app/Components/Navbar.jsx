import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  text-white p-3 fixed w-full z-20 top-0 start-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">tines</a>
        </div>
        <div className="navbar-center hidden lg:flex bg-[#414049] backdrop-blur-xl  rounded-md">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:bg-[#414049]">Item 1</a>
            </li>
            <li>
              <details>
                <summary className="hover:bg-[#414049]">Parent</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:bg-[#414049]">Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="     px-2   py-2 bg-[#414049] rounded-md mr-3 ">
            Log in
          </a>
          <a className=" bg-[#414049]   px-2 py-2 rounded-md  ">Sign up</a>
          <a className="  bg-[#A68BFF] py-2 px-4 rounded-md ml-5 mr-7 text-white border-none ">
            Book a demo{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
