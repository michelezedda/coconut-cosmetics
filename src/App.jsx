import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DayCareSection from "./components/DayCareSection";
import NightCareSection from "./components/NightCareSection.jsx";
import BestSellers from "./components/BestSellers";
import Newsletter from "./components/Newsletter";
import NowTrending from "./components/NowTrending";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coconut. cosmetics</title>
      </Helmet>
      <Navbar />
      <Header />
      <DayCareSection />
      <NightCareSection />
      <Category />
      <BestSellers />
      <Newsletter />
      <NowTrending />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
