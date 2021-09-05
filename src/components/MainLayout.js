import React from "react";
import Footer from "./Footer/Footer";
import Intro from "./intro/Intro";
import Navbar from "./Navbar/Navbar";
import Partners from "./Partners/Partners";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./service/Service";

function MainLayout({theme, toogleTheme}) {

  return (
    <>
      <Navbar theme ={theme} toogleTheme={toogleTheme}/>
      <Intro />
      <Service />
      <Portfolio/>
      <Partners />
      <Footer />
    </>
  );
}

export default MainLayout;
