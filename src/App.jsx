import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Header from "./components/Header";
import DayCareSection from "./components/DayCareSection";
import NightCareSection from "./components/NightCareSection";
import Newsletter from "./components/Newsletter";
import NowTrending from "./components/NowTrending";
import Footer from "./components/Footer";
import { AppProvider } from "./context/appContext";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coconut. cosmetics</title>
      </Helmet>
      <Toaster />
      <Navbar setShowCart={setShowCart} setShowProfile={setShowProfile} />
      {showProfile && <Profile setShowProfile={setShowProfile} />}
      {showCart && <Cart setShowCart={setShowCart} />}
      <Header />
      <DayCareSection setShowCart={setShowCart} />
      <NightCareSection setShowCart={setShowCart} />
      <NowTrending />
      <Newsletter />
      <Footer />
    </AppProvider>
  );
}

export default App;
