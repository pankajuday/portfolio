import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
