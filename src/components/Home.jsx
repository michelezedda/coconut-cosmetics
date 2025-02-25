import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import DayCare from "./DayCare";
import NightCare from "./NightCare";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <DayCare />
        <NightCare />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
