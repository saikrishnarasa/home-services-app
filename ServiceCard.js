import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ServiceCard.css";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <div className="service-card">
      <img className="service-image" src={service.image} alt={service.title} />
      <h3 className="service-title">{service.title}</h3>
      <p className="service-provider">{service.provider}</p>
      <p className="service-address">{service.address}</p>

      <button className="book-now" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}

export default ServiceCard;
