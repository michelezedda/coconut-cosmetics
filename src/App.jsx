import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Header from "./components/Header";
import DayCareSection from "./components/DayCareSection";
import NightCareSection from "./components/NightCareSection.jsx";
import Newsletter from "./components/Newsletter";
import NowTrending from "./components/NowTrending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coconut. cosmetics</title>
      </Helmet>
      <Navbar />
      <Cart />
      <Header />
      <DayCareSection />
      <NightCareSection />
      <NowTrending />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
