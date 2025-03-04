import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/4.png";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    console.log("API Response:", data);
    let data_array = data.data;
    setImage_url(data_array[0].url);
  };
  return (
    <div className="ai_image_generator">
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img_loading">
        <div className="image">
          <img src={image_url === "/" ? default_image : image_url} alt="" />
        </div>
      </div>
      <div className="search_box">
        <input
          type="text"
          ref={inputRef}
          className="search_input"
          placeholder="Describe what you want to see"
        />
        <div className="generate_btn" onClick={()=>{imageGenerator()}}>Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
