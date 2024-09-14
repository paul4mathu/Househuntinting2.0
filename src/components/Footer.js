import React from 'react';
import './Footer.css';

function Footer() {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Title */}
        <div className="footer-section footer-title">
          <h2>Hounter</h2>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Locations</li>
            <li>Blogs</li>
            <li>Admin Login</li>
          </ul>
        </div>

        {/* Section 3: Subscription Form */}
        <div className="footer-section footer-subscribe">
          <p>Subscribe to our newsletter to stay updated.</p>
          <input type="email" placeholder="Enter your email" className="email-input" />
          <p>We respect your privacy and won’t spam you.</p>
          <button className="submit-button">Submit</button>
        </div>

        {/* Section 4: Contact Info */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: info@hounter.com</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-divider" />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Hounter <sup>TM</sup></p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      {/* Floating Arrow for Scroll to Top */}
      <div className="floating-arrow" onClick={scrollToTop}>
        <div className="inner-circle">
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
