import React from "react";
import "./ContactUs.css";



// We use JSX curly braces to evaluate the style object

const Contact = () => (
  <header style={styles.contactStyle} className="contact">
    <h1 style={styles.contactStyle}>Contact Us</h1>
  </header>
);

const ContactUs = () => {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>CONTACT US TEST TEXT</p>
      </div>
    )
  }

export default ContactUs;