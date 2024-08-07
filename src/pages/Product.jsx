import React, { useEffect } from "react";
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
        <title>{item.name}</title>
        <link rel="canonical" href="https://coconut-cosmetics.vercel.app/" />
      </Helmet>
      <Navbar />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
