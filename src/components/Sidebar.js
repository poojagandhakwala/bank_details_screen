import React, { useState } from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <header>
        {/* Sidenav */}
        {(showSidebar || window.innerWidth > 700) && (
          <nav
            id="sidenav-1"
            className={`fixed left-0  z-[1035] h-screen text-md overflow-hidden 
          bg-white border-t-2 border-r-2 border-b-2 dark:bg-zinc-800 
          xl:data-[te-sidenav-hidden='false']:translate-x-0  
          ${
            window.innerWidth < 700
              ? showSidebar
                ? "translate-x-0 top-10 w-screen"
                : ""
              : "top-14 w-60"
          }
          `}
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-mode-breakpoint-over={0}
            data-te-sidenav-mode-breakpoint-side="xl"
            data-te-sidenav-content="#content"
            data-te-sidenav-accordion="true"
          >
            <ul
              className="relative m-0 list-none px-[0.2rem] hover:text-success-600 focus:bg-success-400/10 
              focus:text-success-600"
              data-te-sidenav-menu-ref
            >
              <li className="relative group border-gray max-md:border-b-2 ">
                <a
                  className="group flex h-12 cursor-pointer items-center 
                  truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-800 max-md:font-bold 
                  hover:text-success-600 focus:bg-success-400/10 
                  focus:text-success-600
                  outline-none transition duration-300 ease-linear 
                  focus:outline-none data-[te-sidenav-state-active]:text-sucess-600 
                  data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                  href="#!"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                    <i
                      className="fa-solid fa-grip text-gray-700 
                      focus:bg-success-400/10 group-focus:text-success-600 group-hover:text-success-600"
                    />
                  </span>
                  <span>My Dashboard</span>
                  <span
                    className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
                    data-te-sidenav-rotate-icon-ref
                  >
                    <i className="fa-solid fa-angle-right text-gray-500 
                    group-focus:text-success-600
                    group-hover:text-success-600" />
                  </span>
                </a>
              </li>
              <li className="relative group border-gray max-md:border-b-2 ">              
              <a
                  className="group flex h-12 cursor-pointer items-center 
                  truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-800 max-md:font-bold
                  hover:text-success-600 focus:bg-success-400/10 
                  focus:text-success-600
                  outline-none transition duration-300 ease-linear 
                  focus:outline-none data-[te-sidenav-state-active]:text-sucess-600 
                  data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                  href="#!"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                    <i
                      className="fa-solid fa-link text-gray-700 
                      focus:bg-success-400/10 group-focus:text-success-600 group-hover:text-success-600"
                    />
                  </span>
                  <span>TOTM Links</span>
                  <span
                    className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
                    data-te-sidenav-rotate-icon-ref
                  >
                    <i className="fa-solid fa-angle-right  text-gray-500 
                    group-focus:text-success-600
                    group-hover:text-success-600" />
                  </span>
                </a>
              </li>
              <li className="relative group border-gray max-md:border-b-2 ">
                <a
                  className="group flex h-12 cursor-pointer items-center 
                  truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-800 max-md:font-bold
                  hover:text-success-600 focus:bg-success-400/10 
                  focus:text-success-600
                  outline-none transition duration-300 ease-linear 
                  focus:outline-none data-[te-sidenav-state-active]:text-sucess-600 
                  data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                  href="#!"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                    <i
                      className="fa-solid fa-file-lines text-gray-700 
                      focus:bg-success-400/10 group-focus:text-success-600 group-hover:text-success-600"
                    />
                  </span>
                  <span>Daily Summary</span>
                  <span
                    className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
                    data-te-sidenav-rotate-icon-ref
                  >
                    <i className="fa-solid fa-angle-right text-gray-500 
                    group-focus:text-success-600
                    group-hover:text-success-600" />
                  </span>
                </a>
              </li>
              <li className="relative group border-gray max-md:border-b-2 ">
              <a
                  className="group flex h-12 cursor-pointer items-center 
                  truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-800 max-md:font-bold
                  hover:text-success-600 focus:bg-success-400/10 
                  focus:text-success-600
                  outline-none transition duration-300 ease-linear 
                  focus:outline-none data-[te-sidenav-state-active]:text-sucess-600 
                  data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                  href="#!"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                    <i className="fa-solid fa-bank text-gray-700 
                      focus:bg-success-400/10 group-focus:text-success-600 group-hover:text-success-600" />
                  </span>
                  <span>Bank Details</span>
                  <span
                    className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
                    data-te-sidenav-rotate-icon-ref
                  >
                    <i className="fa-solid fa-angle-right text-gray-500 
                    group-focus:text-success-600
                    group-hover:text-success-600" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <nav
          id="main-navbar"
          className="fixed left-0 right-0 top-0 flex w-full flex-nowrap 
          items-center justify-between bg-white py-[0.6rem] text-gray-500 border-b-2
           hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 
          lg:flex-wrap lg:justify-start "
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center px-4">
            {/* Toggler */}
            <button
              data-te-sidenav-toggle-ref
              data-te-target="#sidenav-1"
              className="block border-0 px-2.5 text-dark
                 hover:no-underline hover:shadow-none focus:no-underline 
                 focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
              aria-controls="#sidenav-1"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-black">
                {window.innerWidth < 700 ? (
                  !showSidebar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 
                      6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      viewBox="0 0 512 512"
                    >
                      <polyline
                        points="244 400 100 256 244 112"
                        style={{
                          fill: "none",
                          stroke: "#000",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 48,
                        }}
                      />
                      <line
                        x1={120}
                        y1={256}
                        x2={412}
                        y2={256}
                        style={{
                          fill: "none",
                          stroke: "#000",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 48,
                        }}
                      />
                    </svg>
                  )
                ) : (
                  <>
                  
                  </>
                )}
              </span>
            </button>
            {/* Navbar */}

            <Navbar />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
