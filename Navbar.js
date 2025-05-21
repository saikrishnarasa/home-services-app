import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const redirectToService = (servicePath) => {
    navigate(`/services/${servicePath}`);
    setServicesDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Fix it Fast: One Tap Services</h2>
      <div className="nav-links">
        <Link to="/" className="nav-button">Home</Link>

        {/* Services Dropdown */}
        <div
          className="services-dropdown"
          ref={servicesRef}
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
        >
          <button className="nav-button">Services ▼</button>
          {servicesDropdownOpen && (
            <div className="dropdown-menu services-menu">
              <button onClick={() => redirectToService("house-cleaning")}>House Cleaning</button>
              <button onClick={() => redirectToService("washing-clothes")}>Washing Clothes</button>
              <button onClick={() => redirectToService("house-repairing")}>House Repairing</button>
              <button onClick={() => redirectToService("bathroom-cleaning")}>Bathroom Cleaning</button>
              <button onClick={() => redirectToService("electric-work")}>Electric Work</button>
              <button onClick={() => redirectToService("plumbing")}>Plumbing</button>
              <button onClick={() => redirectToService("shifting-services")}>Shifting Services</button>
            </div>
          )}
        </div>

        <Link to="/about" className="nav-button">About Us</Link>
      </div>

      <div className="nav-auth">
        {!user ? (
          <Link to="/login" className="login-btn">Login / Sign Up</Link>
        ) : (
          <div className="user-profile" ref={dropdownRef}>
            <div
              className="profile-container"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="profile-pic" />
              ) : (
                <img
                  src="https://via.placeholder.com/40"
                  alt="Default Profile"
                  className="profile-pic"
                />
              )}
            </div>

            {/* Dropdown menu for user actions */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/account">My Account</Link>
                <Link to="/bookings">My Bookings</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
