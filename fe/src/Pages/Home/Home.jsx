import React, {useEffect} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Home/HeroSection/HeroSection";


function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Header/>
        <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
