  import React from "react";
  import "./TheGame.css";

  import amateur from "../../assets/amateur.png";
  import pro from "../../assets/pro.png";
  import expert from "../../assets/expert.png";
  import tick from "../../assets/tick.svg";
  import golfBg from "../../assets/bg-pattern.png"; // your swirl golf ball image

  const TheGame = () => {
    return (
      <section
        className="the-game-section"
        style={{ backgroundImage: `url(${golfBg})` }}
      >
        <div className="the-game-container">
          <h2 className="the-game-title">The Game</h2>
          <p className="the-game-subtitle">
            Choose your challenge — from beginner fun to expert precision.
          </p>

          {/* ---- Game Cards ---- */}
          <div className="game-cards">
            <div className="game-card">
              <img src={amateur} alt="The Amateur" />
              <div className="game-card-content">
                <h3>The Amateur</h3>
                <p>Compact, beginner-friendly design</p>
              </div>
            </div>

            <div className="game-card">
              <img src={pro} alt="The Pro" />
              <div className="game-card-content">
                <h3>The Pro</h3>
                <p>Extended board, advanced precision shots</p>
              </div>
            </div>

            <div className="game-card">
              <img src={expert} alt="The Expert" />
              <div className="game-card-content">
                <h3>The Expert</h3>
                <p>Narrow lane for elite-level challenge</p>
              </div>
            </div>
          </div>

          {/* ---- Features ---- */}
          <div className="features">
            <h4>Features</h4>
            <ul className="feature-list">
              <li>
                <img src={tick} alt="" className="tick-icon" />
                Dimensions in both imperial and metric
              </li>
              <li>
                <img src={tick} alt="" className="tick-icon" />
                Lightweight, foldable, and portable
              </li>
              <li>
                <img src={tick} alt="" className="tick-icon" />
                Turf + foam base for indoor/outdoor versatility
              </li>
              <li>
                <img src={tick} alt="" className="tick-icon" />
                Green & orange theme
              </li>
            </ul>
          </div>

          <button className="specs-btn">See Full Game Specs ↗</button>
        </div>
      </section>
    );
  };

  export default TheGame;
