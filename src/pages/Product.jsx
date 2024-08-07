import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{item.title}</title>
        <link rel="canonical" href="https://coconut-cosmetics.vercel.app/" />
      </Helmet>
      <Navbar />
      {item && (
        <div className="full-recipe">
          <h2>&nbsp;{item.title}</h2>
          <img
            src={item.img}
            alt={item.title}
            onError={(event) => {
              event.target.src = "default-pic.png";
            }}
          />
          <div className="info-container"></div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
