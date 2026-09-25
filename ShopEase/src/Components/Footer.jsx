

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2>🛍️ ShopEase</h2>

          <p>
            Your one-stop destination for quality products at the best prices.
          </p>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">🏠 Home</Link>
          <Link to="/products">🛍️ Products</Link>
          <Link to="/categories">📂 Categories</Link>
          <Link to="/about">ℹ️ About Us</Link>
        </div> {/*ALLOW ACCESS*/}

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>

          <Link to="/contact">📞 Contact Us</Link>
          <a href="#">🚚 Shipping & Delivery</a>
          <a href="#">↩️ Easy Returns & Refunds</a>
          <a href="#">❓ Help & Support</a>
        </div>

        
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Hyderabad, India</p>
          <p>📧 support@shopease.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2005 ShopEase. All rights reserved.</p>
        <p>Made with ❤️ for ShopEase</p>
      </div>

    </footer>
  );
}

export default Footer;

