import React from "react";
import "./Slider.css";
function Slider() {
  return (
    <div className="body">
      <div class="slider">
        <input
          type="range"
          min="1"
          max="100"
          value={5}
          class="range-slider"
          id="slider"
        />
        <label for="">0</label>
        <label for="" class="label-right" id="label">
          100
        </label>
      </div>
    </div>
  );
}

export default Slider;
