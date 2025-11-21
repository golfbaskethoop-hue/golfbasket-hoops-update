import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

import Logo from '../../assets/logo.svg';
import Envelope from '../../assets/Envlope.svg';
import Phone from '../../assets/phone.svg';

import Fb from '../../assets/Fb.svg';
import Insta from '../../assets/Insta.svg';
import X from '../../assets/X.svg';
import Linkedin from '../../assets/linkdin.svg';
import Discord from '../../assets/discord.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* Left Section */}
        <div className="footer-logo">
          <NavLink to="/" end>
            <img src={Logo} alt="Golfbasket Hoops Logo" className="footer-logo-img" />
          </NavLink>
          <p>Where Golf Meets Basketball</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#game">The Game</a></li>
            <li><a href="#how-to-play">How to Play</a></li>
          
          </ul>
        </div>

        {/* Stay Updated */}
        <div className="footer-links">
          <h4>Stay Updated</h4>
          <ul>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <h4>Contact & Social</h4>

          <div className="contact-item">
            <img src={Envelope} alt="Email" />
            <span>info@golfbasketsplay.com</span>
          </div>

          <div className="contact-item">
            <img src={Phone} alt="Phone" />
            <span>+1 347 759–9127</span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/GolfbasketHoops"><img src={Fb} alt="Facebook" /></a>
            <a href="https://www.instagram.com/golfbaskethoopsofficial"><img src={Insta} alt="Instagram" /></a>
            <a href="https://www.golfbasketsplay.com"><img src={X} alt="Twitter" /></a>
            <a href="#"><img src={Linkedin} alt="LinkedIn" /></a>
            <a href="https://www.tiktok.com/@golfbaskethoopsofficial"><img src={Discord} alt="Discord" /></a>
          </div>

          {/* Contact Link */}
          <a href="#get-in-touch" className="footer-contact-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-links-inline">
          <a href="#">Privacy Policy</a> | <a href="#">Terms Of Service</a>
        </div>
        <p>Copyright © 2025 Golfbasket Hoops. All rights reserved.</p>
      </div>
    </footer>
  );
}
