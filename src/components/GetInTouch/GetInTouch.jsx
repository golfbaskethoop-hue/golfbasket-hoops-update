import React from 'react';
import './GetInTouch.css';

// Import your custom SVG icons
import phone from "../../assets/phone.svg";
import envelope from "../../assets/Envlope.svg";
import clock from "../../assets/clock.svg";
import Fb from '../../assets/Fb.svg';
import Insta from '../../assets/Insta.svg';
import X from '../../assets/X.svg';
import Linkedin from '../../assets/linkdin.svg';
import Discord from '../../assets/discord.svg';

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="get-in-touch-section">
      <div className="get-in-touch-header">
        <h2>Get in Touch</h2>
        <p>Got a question, idea, or partnership proposal? We’d love to hear from you!</p>
      </div>

      <div className="get-in-touch-container">
        {/* Contact Form */}
        <form className="contact-form">
          <label>
            Name <span className="required">*</span>
            <input type="text" placeholder="Your Name" required />
          </label>

          <label>
            Email <span className="required">*</span>
            <input type="email" placeholder="Your Email" required />
          </label>

          <label>
            Message
            <textarea placeholder="Write your message..." rows="5"></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Your feedback, questions, and support help us bring Golfbasket Hoops to life.</p>

          <div className="info-item">
            <img src={phone} alt="Phone" className="icon" />
            <span>Phone: <strong>+1 347 759-9127</strong></span>
          </div>

          <div className="info-item">
            <img src={envelope} alt="Email" className="icon" />
            <span>Email: <strong>info@golfbasketsplay.com</strong></span>
          </div>

          <div className="info-item">
            <img src={clock} alt="Support Hours" className="icon" />
            <span>Support Hours: <strong>Mon–Fri, 9AM – 6PM</strong></span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/GolfbasketHoops" className="facebook"><img src={Fb} alt="Facebook" /></a>
            <a href="https://www.instagram.com/golfbaskethoopsofficial" className="instagram"><img src={Insta} alt="Instagram" /></a>
            <a href="https://www.golfbasketsplay.com" className="twitter"><img src={X} alt="Twitter" /></a>
            <a href="#" className="linkedin"><img src={Linkedin} alt="LinkedIn" /></a>
            <a href="https://www.tiktok.com/@golfbaskethoopsofficial" className="discord"><img src={Discord} alt="Discord" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
