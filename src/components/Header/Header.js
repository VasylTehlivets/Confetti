import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  return (
    <header className="header">
      <div className="logo-menu">
        <img src={logo} alt="CONFETTI" className="logo" />
        <div className="menu-icon">
          <div className="menu">MENU</div>
          <button className="burger-menu-button" onClick={toggleBurgerMenu}>
            <img src={menu} alt="Menu" />
          </button>
        </div>
      </div>
      <BurgerMenu isOpen={burgerMenuOpen} onClose={toggleBurgerMenu} />
    </header>
  );
}

export default Header;
