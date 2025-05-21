import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import BookAppointment from "./pages/BookAppointment";
import ServiceDetails from "./pages/ServiceDetails";
import MyBookings from "./pages/MyBookings";

function App() {
  console.log("App component is rendering...");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
