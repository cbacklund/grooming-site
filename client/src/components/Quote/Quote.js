import React from "react";
import "./Quote.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Quote = () => (
  <section className="quote">
    <h2>Pricing Quote per Breed</h2>
    <h4>Breed:</h4>
    <h4>Base Price:</h4>
    <h4>Time Estimate:</h4>
    <h4>Whats Included:</h4>
  </section>
);

export default Quote;