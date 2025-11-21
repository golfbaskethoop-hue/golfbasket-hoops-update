import React from "react";
import "./Hero.css";
import heroBg from "../../assets/hero-bg.png";
import phone from "../../assets/phone.svg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay is purely visual, does NOT block clicks */}
      <div className="overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h1>Golfbasket Hoops – Where Golf Meets Basketball!</h1>
        <p>
          The ultimate fusion of precision and fun.
          <br />
          Play it. Love it. Own it.
        </p>
        <button className="cta"
  onClick={() => window.location.href = "tel:+13477599127"}>
   <img src={phone} alt="cart icon" className="cart-icon" />
    +1 347 759-9127
</button>

      </div>
    </section>
  );
};

export default Hero;
