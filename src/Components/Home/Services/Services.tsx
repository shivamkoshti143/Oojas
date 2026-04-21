import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Fresh Doorstep Delivery</h3>
          <p>Chilled juices delivered with care</p>
        </div>
        <div className="serviceBox">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>Supportive Guidance</h3>
          <p>Helpful nutrition notes without the lecture</p>
        </div>
        <div className="serviceBox">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Premium Ingredients</h3>
          <p>Fresh, polished, and joyfully nourishing</p>
        </div>
      </div>
    </>
  );
};

export default Services;
