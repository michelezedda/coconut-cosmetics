import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import BestSellers from "./components/bestsellers/BestSellers";
import Newsletter from "./components/newsletter/Newsletter";
import NowTrending from "./components/nowtrending/NowTrending";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>coconut. cosmetics</title>
      </Helmet>
      <Navbar />
      <Header />
      <BestSellers />
      <Newsletter />
      <NowTrending />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
