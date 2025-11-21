import React from "react";
import "./Support.css";
import SupportBg from "../../assets/SupportBg.png";
import World from "../../assets/World.png";

const Support = () => {
  return (
    <section className="support-section">
      {/* Background image */}
      <div
        className="support-bg"
        style={{ backgroundImage: `url(${SupportBg})` }}
      ></div>

      <div className="support-content">
        <div className="support-header">
          <h1>Help Bring Golfbasket Hoops to the World!</h1>
          <p className="subtitle">
            Golfbasket Hoops isn’t just a game — it’s a movement.
          </p>
        </div>

        <div className="support-body">
          <div className="world-image">
            <img src={World} alt="World" />
          </div>

          <div className="support-text">
            <h2>Why Support Us</h2>
            <p className="support-subheading">
              Your backing helps us bring Golfbasket Hoops to players everywhere.
            </p>
            <ul className="support-list">
              <li>🌍 <strong>Global Launch</strong> – Help us reach players around the world</li>
              <li>⚙️ <strong>Quality Production</strong> – Funds go into premium materials & tooling</li>
              <li>📦 <strong>Smart Packaging</strong> – Eco-friendly, portable design</li>
              <li>🏆 <strong>Community Perks</strong> – Early backers get exclusive rewards</li>
            </ul>
          </div>
        </div>

        <p className="footer-text">
          Your support helps us manufacture, package, and ship the first official
          units worldwide. <br />Be part of the community that’s redefining fun and
          precision.
        </p>

        <button className="specs-btn">Support the Project ↗</button>
      </div>
    </section>
  );
};

export default Support;
