import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import DayCare from "./components/DayCare";
import NightCare from "./components/NightCare";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="container mx-auto px-4 max-w-screen-lg">
        <DayCare />
        <NightCare />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
