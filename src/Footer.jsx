import React from 'react';

export default function Footer({ contactRef }) {
  return (
    <footer ref={contactRef}>
      <section className="location">
        <h4>Location:</h4>
        <p>123 Main St.</p>
        <p>Anytown, CA</p>
        <p>90210</p>
      </section>
      <section className="hours">
        <h4>Hours:</h4>
        <p>Mon - Fri</p>
        <p>9:00 - 5:00</p>
      </section>
      <p className="copyright">&copy; {new Date().getFullYear()} Paw Spa. All rights reserved.</p>
    </footer>
  );
}