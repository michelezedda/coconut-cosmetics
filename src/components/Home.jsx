import Ticker from "./Ticker";
import Navbar from "./Navbar";
import DayCare from "./DayCare";
import NightCare from "./NightCare";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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
