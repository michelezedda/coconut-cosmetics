import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Header from "./components/Header";
import DayCareSection from "./components/DayCareSection";
import NightCareSection from "./components/NightCareSection";
import Newsletter from "./components/Newsletter";
import NowTrending from "./components/NowTrending";
import Footer from "./components/Footer";
import { CartProvider } from "./context/cartContext";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coconut. cosmetics</title>
      </Helmet>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Header />
      <DayCareSection setShowCart={setShowCart} />
      <NightCareSection setShowCart={setShowCart} />
      <NowTrending />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
}

export default App;
