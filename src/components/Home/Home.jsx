import React from "react";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import OurStory from "../OurStory/OurStory";
import TheGame from "../TheGame/TheGame";
import HowToPlay from "../HowToPlay/HowToPlay";
import Support from "../Support/Support";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
   
        
      <FeaturesSection />
      

      {/* Our Story */}
      <div id="our-story">
        <OurStory />
      </div>

      {/* The Game */}
      <div id="game">
        <TheGame />
      </div>

      {/* How to Play */}
      <div id="how-to-play">
        <HowToPlay />
      </div>

      {/* Support */}
      <div id="support">
        <Support />
      </div>
    </>
  );
};

export default Home;
