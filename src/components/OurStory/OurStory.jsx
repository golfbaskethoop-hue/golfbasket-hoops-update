import React from "react";
import "./OurStory.css";

import backgroundPattern from "../../assets/flame-pattern.png"; // your flame/fireball image

const OurStory = () => {
  return (
    <section
      className="our-story"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <div className="story-wrapper">
        <h2 className="story-title">Our Story</h2>

        <div className="story-content">
          <div className="story-text">
            <p>
              Golfbasket Hoops was born from a simple idea — combine the{" "}
              <span className="highlight">precision</span> of golf with the{" "}
              <span className="highlight">excitement</span> of basketball. Our
              founder, Alpha, wanted to create a game that challenges skill,
              builds connection, and can be enjoyed{" "}
              <span className="highlight">anywhere</span>. After months of
              testing, design improvements, and player feedback, Golfbasket
              Hoops became more than just a game — It’s a whole new way to play.
              With its compact, <span className="highlight">portable</span>{" "}
              design, it’s perfect for indoor or outdoor fun.
            </p>
          </div>

          <div className="story-video">
            <video
              src="/videos/ourstory.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="ourstory-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
