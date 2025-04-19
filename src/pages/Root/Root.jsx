import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="fixed top-0 z-1000 w-full bg-white shadow-md">
        <Navbar></Navbar>
      </div>
      <div className="pt-12 min-h-[calc(100vh-200px)] max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto mt-6 md:mt-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
