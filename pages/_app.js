import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
