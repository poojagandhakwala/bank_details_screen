import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:flex font-sans font-bold text-md mt-1 -mb-2 ">
      <ul className="flow-root left-0 items-baseline">
        <li className="float-left">
          <a
            className="bg-white inline-block rounded-t py-2 text-gray-800 font-semibold"
            href="#"
          >
            Logo
          </a>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-between max-xl:space-x-4 lg:pl-16 xl:pl-24 ">
        <li className="-mb-4 mr-1 px-2">
          <a
            className="bg-white inline-block border-[#2E8362] border-b-4 
            rounded-t py-2 px-3 text-gray-800 font-semibold"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="-mb-4 mr-1 px-2">
          <a
            className="bg-white inline-block py-2 px-3 text-gray-800 hover:border-b font-semibold"
            href="#"
          >
            Services
          </a>
        </li>
        <li className="-mb-4 mr-1 px-2">
          <a
            className="bg-white inline-block py-2 px-1 text-gray-700 hover:border-b font-semibold"
            href="#"
          >
            Blog
          </a>
        </li>
        <li className="-mb-4 mr-1  px-2">
          <a
            className="bg-white inline-block py-2 px-1 text-gray-700 hover:border-b font-semibold"
            href="#"
          >
            Offers
          </a>
        </li>
        <li className="-mb-4 mr-1 px-2">
          <a
            className="bg-white inline-block py-2 px-1 text-gray-700 font-semibold"
            href="#"
          >
            About Us
          </a>
        </li>
      </ul>
      <ul
        className="flex flex-wrap 
      hidden lg:flex text-lg mx-2 text-right
      max-xl:ml-56 gap-x-2"
      >
        <li className="mr-1 flex-1">
          <a
            className="bg-white inline-block py-1 px-3 text-gray-500 font-semibold"
            href="#"
          >
            <i className="fa fa-search" />
          </a>
        </li>
        <li className="mr-1 flex-2">
          <a
            className="bg-white inline-block py-1 px-3 text-gray-500 font-semibold"
            href="#"
          >
            <i className="fa fa-bell" />
          </a>
        </li>
        <li className="mr-1 flex-3">
          <a
            className="bg-white inline-block py-1 px-3 text-gray-500 font-semibold"
            href="#"
          >
            <i className="fa fa-user" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
