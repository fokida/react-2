import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <section className="offer" id="offer">
      <div className="main">
        <h2 className="offer_header">Czym zajmuje się nasza firma?</h2>
        <div className="main_services">
          <div className="services">
            <div className="services_box">
              <div className="dot"></div>
              Usługa 1<div className="services_box_new">(nowość)</div>
            </div>
            <div className="services_box">Usługa 2</div>
            <div className="services_box">Usługa 3</div>
            <div className="services_box">Usługa 4</div>
            <div className="services_box">Usługa 5</div>
            <div className="services_box">Usługa 6</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
