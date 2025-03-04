import React from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/4.png";

const ImageGenerator = () => {
  return (
    <div className="ai_image_generator">
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img_loading">
        <div className="image">
          <img src={default_image} alt="" />
        </div>
      </div>
      <div className="search_box">
        <input
          type="text"
          className="search_input"
          placeholder="Describe what you want to see"
        />
        <div className="generate_btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
