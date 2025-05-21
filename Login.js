import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import styles from "../styles/Login.module.css";

const clientId = "601498720745-nu09sapubfe09jk7cilp79cr7es0o7ct.apps.googleusercontent.com";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      alert("Google login failed. Please try again.");
      return;
    }

    try {
      // The credential is a JWT token. To get user info, decode or fetch Google UserInfo API.
      // Here, decode manually without jwt-decode package (simple base64 decode):

      const base64Url = credentialResponse.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      const userObject = JSON.parse(jsonPayload);

      const userData = {
        name: userObject.name,
        email: userObject.email,
        photoURL: userObject.picture || "https://via.placeholder.com/40",
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to decode token", error);
      alert("Google login failed. Please try again.");
    }
  };

  const handleGoogleFailure = () => {
    alert("Google login failed. Please try again.");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Welcome!</h2>

          {!user ? (
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          ) : (
            <div className={styles.profileContainer}>
              <img
                src={user.photoURL}
                alt="Profile"
                className={styles.profilePic}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <p className={styles.dropdownItem}>My Account</p>
                  <p className={styles.dropdownItem}>My Booking</p>
                  <p className={styles.dropdownItem} onClick={handleLogout}>
                    Logout
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
