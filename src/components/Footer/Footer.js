import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="Logo" />
      <p>confetti © 2023</p>
    </div>
  );
};

export default Footer;
