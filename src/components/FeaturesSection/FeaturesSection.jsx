import React from "react";
import "./FeaturesSection.css";

import funImg from "../../assets/fun.png";
import portableImg from "../../assets/portable.png";
import indoorImg from "../../assets/indoor.png";
import patentImg from "../../assets/patent.png";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Why You’ll Love Golfbasket Hoops</h2>

      <div className="features-grid">
        <div className="feature-card">
          <div
            className="feature-image"
            style={{ backgroundImage: `url(${funImg})` }}
          ></div>
          <h3>Fun for All Ages</h3>
          <p>Perfect for kids, adults, and everyone in between.</p>
        </div>

        <div className="feature-card">
          <div
            className="feature-image"
            style={{ backgroundImage: `url(${portableImg})` }}
          ></div>
          <h3>Portable & Easy to Set Up</h3>
          <p>Lightweight, foldable, and ready in minutes.</p>
        </div>

        <div className="feature-card">
          <div
            className="feature-image"
            style={{ backgroundImage: `url(${indoorImg})` }}
          ></div>
          <h3>Indoor & Outdoor Play</h3>
          <p>Enjoy in your backyard, living room, or at parties.</p>
        </div>

        <div className="feature-card">
          <div
            className="feature-image"
            style={{ backgroundImage: `url(${patentImg})` }}
          ></div>
          <h3>Patent Pending Innovation</h3>
          <p>A one-of-a-kind fusion of golf and basketball.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
