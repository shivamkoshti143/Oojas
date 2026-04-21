import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heroMain">
        <div className="sectionleft">
          <p>Fresh & delicious</p>
          <h1>Smoothies, juices & shots of sunshine</h1>
          <span>
            Home-made recipes based on Ayurvedic wisdom, infused with love, and
            delivered right to your door.
          </span>
          <div className="heroLink">
            <Link to="/shop" onClick={scrollToTop}>
              <h5>Build your box</h5>
            </Link>
          </div>
        </div>
        <div className="sectionright">
          <div className="sunburst" aria-hidden="true"></div>
          <div className="juiceStillLife" aria-label="OOJAS juice selection">
            <div className="bottle bottleTall">
              <span>sexy beetroot</span>
            </div>
            <div className="bottle bottleGold">
              <span>gold-dust baby</span>
            </div>
            <div className="bottle bottleBerry">
              <span>blueberry cacao</span>
            </div>
            <div className="ingredient ingredientLeaf"></div>
            <div className="ingredient ingredientApple"></div>
            <div className="ingredient ingredientDot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
