import "./ServicesBox.js";
import "./ServicesBox.css";

const ServiceBox = ({ isNew, serviceNumber, serviceName }) => {
  return (
    <div className="services_box">
      {isNew && <div className="dot"></div>}
      {serviceName} {serviceNumber}
      {isNew && <div className="services_box_new">(nowość)</div>}
    </div>
  );
};

export default ServiceBox;
