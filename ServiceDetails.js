import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/servicesData";
import "../styles/ServiceData.css";

function ServiceDetails() {
  const { id, slug } = useParams();
  const navigate = useNavigate();

  let service;

  if (id) {
    service = services.find((s) => s.id === parseInt(id));
  } else if (slug) {
    const formattedSlug = slug.toLowerCase().replace(/[-_]/g, " ");
    service = services.find((s) =>
      s.title.toLowerCase().includes(formattedSlug)
    );
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-lg">
        <h2>⚠️ Service Not Found</h2>
      </div>
    );
  }

  const handleBooking = () => {
    navigate("/book-appointment");
  };

  return (
    <div className="service-detail-container">
      <div className="service-detail-card">
        <img
          src={service.image}
          alt={service.title}
          className="service-detail-image"
        />
        <h2 className="service-detail-title">{service.title}</h2>
        <p className="service-detail-provider">
          <strong>👤 Provider:</strong> {service.provider}
        </p>
        <p className="service-detail-address">
          <strong>📍 Address:</strong> {service.address}
        </p>
        <div
          className="service-detail-description"
          dangerouslySetInnerHTML={{ __html: service.Description }}
        />
        <button className="book-button" onClick={handleBooking}>
          📅 Book appointment
        </button>
      </div>
    </div>
  );
}

export default ServiceDetails;
