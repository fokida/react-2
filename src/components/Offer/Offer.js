import ServiceBox from "./ServicesBox.js";
import "./Offer.css";

const servicesData = [
  { name: "Usługa", isNew: true },
  { name: "Usługa", isNew: false },
  { name: "Usługa", isNew: false },
  { name: "Usługa", isNew: false },
  { name: "Usługa", isNew: false },
  { name: "Usługa", isNew: false },
];

const Offer = () => {
  return (
    <section className="offer" id="offer">
      <div className="main">
        <h2 className="offer_header">Czym zajmuje się nasza firma?</h2>
        <div className="main_services">
          <div className="services">
            {servicesData.map((service, index) => (
              <ServiceBox
                key={index + 1}
                isNew={service.isNew}
                serviceNumber={index + 1}
                serviceName={service.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
