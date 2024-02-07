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
      <div className="lomen">
        <img src={logo} alt="Logo" />
        <div className="burgerMenu">
          <p className="menu">MENU</p>
          <button className="burger-menu-button" onClick={toggleBurgerMenu}>
            <img src={menu} alt="Menu" />
          </button>
        </div>
      </div>
      {/* <BurgerMenu /> */}
      <BurgerMenu isOpen={burgerMenuOpen} onClose={toggleBurgerMenu} />
    </header>
  );
}

export default Header;
