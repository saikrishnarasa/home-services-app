import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase"; // <-- Updated import path
import { signOut } from "firebase/auth";

const ProfileDropdown = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        {user?.photo ? (
          <img
            src={user.photo}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        ) : (
          <FaUserCircle className="text-gray-600 text-3xl" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border"
        >
          <ul className="text-sm text-gray-800">
            <li className="px-4 py-3 font-bold border-b cursor-pointer hover:bg-gray-100">
              My Account
            </li>
            <li
              className="px-4 py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => alert("View Bookings")}
            >
              My Booking
            </li>
            <li
              className="px-4 py-3 text-red-600 font-semibold cursor-pointer hover:bg-red-100"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;
