import React, { useState } from "react";
import ProfileDropdown from "../components/ProfileDropdown";

const HomePage = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Simulate Google Login (Replace with actual auth logic)
    setUser({
      name: "John Doe",
      email: "johndoe@gmail.com",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Website Logo */}
      <h1 className="text-xl font-bold text-blue-600">Home Services</h1>

      {/* Profile/Login Button */}
      
    </div>
  );
};

export default HomePage;
