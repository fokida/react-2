import React from "react";
import Navigation from "./components/Navigation.js";
import LandingPage from "./components/LandingPage.js";
import About from "./components/About.js";
import Offer from "./components/Offer.js";
import Footer from "./components/Footer.js";
import "./index.css";

const App = () => {
  return (
    <div className="page">
      <Navigation />
      <LandingPage />
      <About />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
