import React, { useState } from "react";
import {
  Box,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Layouts/Fulllayout/Header/Header";
import Sidebar from "../Layouts/Fulllayout/Sidebar/Sidebar";
import Footer from "../Layouts/Fulllayout/Footer/Footer";



const FullLayout = () => {

  return (
    <Box>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default FullLayout;