import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
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
      <Footer />
    </>
  );
}

export default App;
