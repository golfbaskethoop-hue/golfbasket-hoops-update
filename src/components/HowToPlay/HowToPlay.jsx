import React from "react";
import "./HowToPlay.css";
import targetImg from "../../assets/target.png";
import pointsImg from "../../assets/points.png";
import trophyImg from "../../assets/trophy.png";
import playersImg from "../../assets/Players.png";
import PlayIcon from "../../assets/PlayIcon.svg"; // ✅ Import SVG

const steps = [
  {
    id: 1,
    img: targetImg,
    text: "Aim the golf ball towards the hoop.",
  },
  {
    id: 2,
    img: pointsImg,
    text: "Earn points based on successful shots.",
  },
  {
    id: 3,
    img: trophyImg,
    text: "Choose your challenge level: Starter, Pro, Expert.",
  },
  {
    id: 4,
    img: playersImg,
    text: "Play solo or in multiplayer mode.",
  },
];

export default function HowToPlay() {
  return (
    <section className="how-to-play">
      <div className="how-to-play-wrapper">
        <h2 className="how-to-play-title">How to Play</h2>
        <p className="how-to-play-subtitle">
          Simple to learn, challenging to master — anyone can play and enjoy!
        </p>

        <div className="how-to-play-cards">
          {steps.map((step) => (
            <div className="how-to-play-card" key={step.id}>
              <div className="card-number">{step.id}</div>
              <img src={step.img} alt={`Step ${step.id}`} className="card-img" />
              <p className="card-text">{step.text}</p>
            </div>
          ))}
        </div>

        {/* ✅ Updated Watch Demo Button */}
        <button className="watch-demo-btn">
          <img src={PlayIcon} alt="Play Demo" className="play-icon" />
          Watch Demo
        </button>
      </div>
    </section>
  );
}
