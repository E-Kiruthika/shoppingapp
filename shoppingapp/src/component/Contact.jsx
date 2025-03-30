import React from "react";
import "./Contact.css"; // Ensure the correct filename and path

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <p>Email: support@shoppingapp.com</p>
      <p>Phone: +91 98765 43210</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default Contact;