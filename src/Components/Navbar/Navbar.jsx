import "./Navbar.css";
import logo from "../../assets/portfolio.png";
import { useState, useRef } from "react";  
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(); 

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Portfolio Logo"
        style={{ height: "10%", width: "5%" }}
      />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />

      <ul  className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li onClick={() => setMenu("home")}>
          <a href="#home">
            <p>Home</p>
          </a>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li onClick={() => setMenu("about")}>
          <a href="#about">
            <p>About Me</p>
          </a>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li onClick={() => setMenu("services")}>
          <a href="#services">
            <p>Services</p>
          </a>
          {menu === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li onClick={() => setMenu("work")}>
          <a href="#work">
            <p>Portfolio</p>
          </a>
          {menu === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li onClick={() => setMenu("contact")}>
          <a href="#contact">
            <p>Contact</p>
          </a>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>
      <div className="nav-connect" onClick={() => setMenu("contact")}>
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
