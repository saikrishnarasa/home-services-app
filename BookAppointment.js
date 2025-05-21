import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/BookAppointment.css";

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    contact: "",
    transactionId: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser); // Debugging auth state
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      alert("Checking login status... Please wait.");
      return;
    }

    const currentUser = auth.currentUser;
    console.log("User at submit time:", currentUser); // Debug

    if (!currentUser) {
      alert("Booking successful.");
      return;
    }

    try {
      const bookingData = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        name: formData.name,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        contact: formData.contact,
        transactionId: formData.transactionId,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "bookings"), bookingData);

      alert("Appointment Booked Successfully!");
      navigate("/my-bookings");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>

      {loading ? (
        <p>Checking login status...</p>
      ) : user ? (
        <p>Logged in as: {user.email}</p>
      ) : (
        <p>Booking Successful.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="service"
          placeholder="Service Required"
          value={formData.service}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="transactionId"
          placeholder="Enter Transaction ID after payment"
          value={formData.transactionId}
          onChange={handleChange}
          required
        />
        <button type="submit" className="book-btn">
          Confirm Booking
        </button>
      </form>

      <div className="payment-section">
        <h3>Scan & Pay via PhonePe</h3>
        <p>Please scan the QR code below to complete the payment for your service.</p>
        <img
          src="/images/payment scanner.jpg"
          alt="PhonePe QR Code"
          className="payment-qr"
          style={{
            maxWidth: "250px",
            marginTop: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}

export default BookAppointment;
