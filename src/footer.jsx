import React from "react";

function Footer() {
  const currentDate = new Date();
  const Year = currentDate.getFullYear();
  return (
    <footer>
      <p className="footer p"> Copyright © {Year} </p>
    </footer>
  );
}

export default Footer;
