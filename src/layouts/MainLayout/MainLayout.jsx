import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
      <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </>
  );
};

export default MainLayout;
