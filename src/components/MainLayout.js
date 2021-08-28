import React from "react";
import Intro from "./intro/Intro";
import Navbar from "./Navbar/Navbar";
import Service from "./service/Service";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Intro />
      <Service />
    </>
  );
}

export default MainLayout;
