import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { FaClock, FaEnvelope, FaUser } from "react-icons/fa";

const HouseCleaning = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleBooking = async () => {
    if (!user) {
      alert("Please login to book a service.");
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        service: "House Cleaning",
        date: new Date().toLocaleDateString(),
        userEmail: user.email,
        userName: user.name || "Unknown",
        address: "1-48 Maruthi Nagar, Razam",
        providerEmail: "Subbalaxmi@gmail.com",
        providerName: "Subbalaxmi",
        availableTime: "10:00 AM to 6:00 PM",
        price: "₹300",
      });

      alert("Booking confirmed! Check 'My Bookings' for details.");
      navigate("/bookings");
    } catch (error) {
      console.error("Error booking service:", error);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section - Image */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/100"
          alt="House Cleaning"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="bg-purple-300 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            Cleaning
          </span>
          <h2 className="text-2xl font-bold">House Cleaning</h2>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
          📍 1-48 Maruthi Nagar, Razam
        </p>

        <p className="text-blue-600 flex items-center gap-2 mt-1">
          <FaEnvelope /> <a href="mailto:Subbalaxmi@gmail.com">Subbalaxmi@gmail.com</a>
        </p>

        <p className="flex items-center gap-2 text-gray-700 mt-1">
          <FaUser /> Subbalaxmi
        </p>

        <p className="flex items-center gap-2 text-gray-700 mt-1">
          <FaClock /> Available 10:00 AM to 6:00 PM
        </p>

        {/* Description */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Description</h3>
          <p className="text-gray-800 mt-2 font-semibold">
            House Cleaning Service – Just ₹300! 🏡 ✨
          </p>
          <p className="text-gray-700">
            Get your home cleaned professionally at an affordable price! For just ₹300, we offer:
          </p>

          {/* Service List */}
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>✅ <strong>Sweeping & Mopping</strong> – Clean and shiny floors</li>
            <li>✅ <strong>Dusting</strong> – Furniture, shelves, and surfaces</li>
            <li>✅ <strong>Cobweb Removal</strong> – No more hidden dust</li>
            <li>✅ <strong>Bathroom & Kitchen Cleaning</strong> – Fresh and hygienic</li>
            <li>✔️ <strong>Quick & Efficient</strong> ✔️ <strong>Trusted Cleaners</strong> ✔️ <strong>Best Price</strong></li>
            <li>📅 <strong>Book Now!</strong> A clean home is just a step away! ✨</li>
          </ul>
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={handleBooking}
          className="mt-5 bg-purple-600 text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition"
        >
          📅 Book Appointment
        </button>
      </div>
    </div>
  );
};

export default HouseCleaning;
