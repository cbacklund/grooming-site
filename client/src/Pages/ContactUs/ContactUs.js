import React from "react";
import "./ContactUs.css";
<link  href="https://fonts.googleapis.com/css?family=Ruslan+Display" rel="stylesheet"></link>


// We use JSX curly braces to evaluate the style object

const Contact = () => (
  <header className="contact">
    <h1>Contact Us</h1>
  </header>
);

const ContactUs = () => {
    return (
      <div>
        <h1 className = "contact" >Contact Us</h1>
        <p>CONTACT US TEST TEXT</p>
      </div>
    )
  }

export default ContactUs;