import React from "react";
import "./BurgerMenu.css";
import { Link, animateScroll as scroll } from "react-scroll";

const BurgerMenu = ({ isOpen, onClose }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
    onClose();
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-content">
        <h1 className="burger-menu-logo">CONFETTI</h1>
        <div className="burger-close" onClick={onClose}>
          &#10005;
        </div>
      </div>

      <nav className="burger-nav">
        <Link to="hero" smooth={true} duration={500} onClick={scrollToTop}>
          główna
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={onClose}>
          O nas
        </Link>
        <Link to="review" smooth={true} duration={500} onClick={onClose}>
          Recenzje
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={onClose}>
          Kontakty
        </Link>
      </nav>
    </div>
  );
};

export default BurgerMenu;
