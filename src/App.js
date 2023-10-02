import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import About from "./components/About/About.js";
import Offer from "./components/Offer/Offer.js";
import Footer from "./components/Footer/Footer.js";
import "./reset.css";
import "./App.css";

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
