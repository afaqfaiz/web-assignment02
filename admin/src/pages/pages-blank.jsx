import React from "react";
import Sidebar from "../components/Sidebar-blank";
 import Navbar from "../components/Navbar-blank";
import Footer from "../components/Footer-blank";
 import MainContent from "../components/mainContent";

const Blank = () => {
  return (
    <div className="wrapper">

      <Sidebar />

       <div className="main">
        <Navbar />

        <MainContent />

       
        <Footer />

       </div> 
    </div>
  );
};

export default Blank;
