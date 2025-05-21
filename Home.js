import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomePage from "./HomePage";
import ServiceCard from "../components/ServiceCard";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "House Cleaning", provider: "Subbalaxmi", address: "1-48 Maruthi Nagar, Razam", image: "/images/housecleaning.jpg" },
    { id: 2, title: "Washing Clothes", provider: "Anusha", address: "7-92 Gandhi Nagar, Srikakulam", image: "/images/washingcloths.jpg" },
    { id: 3, title: "House Repairing", provider: "Ramesh", address: "10-23 MG Road, Vizag", image: "/images/house-repairing.jpg" },
    { id: 4, title: "Bathroom Cleaning", provider: "Krishna", address: "45-56 Krishna Nagar, Vizag", image: "/images/bathroomcleaning.jpg" },
    { id: 5, title: "Electrical Work", provider: "Suresh", address: "8-12 Surya Colony, Hyderabad", image: "/images/electricalwork.jpeg" },
    { id: 6, title: "Plumbing", provider: "Venkat", address: "24-78 Vijaya Nagar, Chennai", image: "/images/plumbing.jpg" },
    { id: 7, title: "Shifting Services", provider: "Ravi", address: "9-20 Lakshmi Nagar, Bangalore", image: "/images/shifting.jpg" },
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      const foundService = services.find((service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (foundService) {
        navigate(`/services/${foundService.title.toLowerCase().replace(/\s+/g, "-")}`);
      } else {
        alert("Service not found!");
      }

      setSearchQuery("");
    }
  };

  return (
    <div className="home-container">
      <HomePage />
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Find Home <span className="highlight">Service/Repair</span> Near You
      </motion.h1>

      <motion.input
        type="text"
        placeholder="Search Service"
        className="search-box"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />

      <motion.div className="categories" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <button onClick={() => navigate("/services/house-cleaning")}>Cleaning</button>
        <button onClick={() => navigate("/services/house-repairing")}>Repair</button>
        <button onClick={() => navigate("/services/washing-clothes")}>Washing</button>
        <button onClick={() => navigate("/services/shifting-services")}>Shifting</button>
        <button onClick={() => navigate("/services/plumbing")}>Plumbing</button>
        <button onClick={() => navigate("/services/electrical-work")}>Electric</button>
      </motion.div>

      <motion.h2 className="popular-title" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        Popular Business
      </motion.h2>

      <div className="service-list">
        {services.map((service, index) => (
          <motion.div key={service.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.1 * index }}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
