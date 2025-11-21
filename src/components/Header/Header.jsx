import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import envlope from "../../assets/Envlope.svg";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/" end>
            <img src={logo} alt="Golfbasket Hoops Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Desktop nav */}
        <nav className="nav-links desktop-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <a href="#game">The Game</a>
          <a href="#how-to-play">How to Play</a>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Gallery
          </NavLink>

         <NavLink
  to="/blog"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Blog
</NavLink>

          <a href="#get-in-touch">Contact</a>
        </nav>

        <div className="header-right">
         <button
  className="order-btn"
  onClick={() => window.location.href = "mailto:info@golfbasketsplay.com"}
>
  <img src={envlope} alt="envelope" className="cart-icon" />
  Mail us
</button>

        </div>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav
        className={`mobile-nav ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/"
          end
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <a href="#game" onClick={() => setMenuOpen(false)}>The Game</a>
        <a href="#how-to-play" onClick={() => setMenuOpen(false)}>How to Play</a>
        <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>

        <NavLink
          to="/gallery"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Gallery
        </NavLink>

        <NavLink
  to="/blog"
  onClick={() => setMenuOpen(false)}
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Blog
</NavLink>

        <a href="#get-in-touch" onClick={() => setMenuOpen(false)}>Contact</a>


        <button
  className="order-btn"
  onClick={() => {
    setMenuOpen(false);
    window.location.href = "mailto:info@golfbasketsplay.com";
  }}
>
  <img src={envlope} alt="envelope" className="cart-icon" />
  Order Now
</button>

      </nav>
    </>
  );
};

export default Header;
