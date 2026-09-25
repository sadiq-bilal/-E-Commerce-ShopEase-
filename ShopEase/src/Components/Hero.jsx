import React from "react";
import heroImages from "../Data/Hero";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const hero = heroImages[image];

  return (
    <div className="hero">
      <div className="hero-details">
        <p style={{color:"blue"}}>WELCOME TO SHOPEASE</p>
        <h2>{hero.heading}</h2>
        <p>{hero.description}</p>
        <Link to="/products"><button >{hero.buttonText} →</button> </Link>
      </div>
      <div className="hero-image">
        <img src={hero.image} alt={hero.category} />
      </div>
      <div className="hero-slides">
        {heroImages.map((banner, index) => {
          return (
            <span
              key={banner.id}
              className={image === index ? "active" : ""}
              onClick={() => setImage(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
