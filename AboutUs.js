import React from "react";
import "../styles/AboutUs.css"; // Import CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        About Us
      </header>

      {/* Main Content */}
      <div className="about-content">
        <h1 className="about-title">
          Welcome to Fix it Fast: One Tap Services
        </h1>
        <p className="about-description">
          At Fix it Fast, we are dedicated to bringing you reliable,
          professional, and affordable home services with just a tap. Whether
          you're in need of cleaning, repair, plumbing, electrical work, or
          more, our team of experts is here to assist you with your home service
          needs.
        </p>
        <p className="about-description">
          We believe in convenience, quality, and customer satisfaction. Our
          goal is to make your life easier by providing top-notch services at
          your doorstep. No more hassle or long waits—just the best service,
          whenever you need it.
        </p>
        <p className="about-description">
          Our platform connects you with trusted local professionals who
          specialize in a wide range of services. With our user-friendly
          interface, you can find and book services effortlessly, ensuring a
          smooth experience from start to finish.
        </p>

        {/* Values Section */}
        <h2 className="about-title">Our Values</h2>

        <div className="values-container">
          {/* Convenience */}
          <div className="value-card">
            <h3>Convenience</h3>
            <p>
              Quick and easy access to the best services at your fingertips.
            </p>
          </div>

          {/* Quality */}
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              Top-quality services delivered by experienced professionals.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="value-card">
            <h3>Customer Satisfaction</h3>
            <p>
              Your satisfaction is our priority. We ensure that every service
              exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
