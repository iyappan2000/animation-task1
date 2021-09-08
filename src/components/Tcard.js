import React, { useState } from "react";
import "./Fcard.css";
// import Slider from "./Slider";
import { Slider } from "antd";

function Tcard() {
  const [Value, setValue] = useState(1);
  const [value2, setValue2] = useState(4.99);
  const handleChange = (value) => {
    setValue(value);
    setValue2(value + 7.94);
  };

  return (
    <div className="t-card">
      <h1 style={{ color: "white", textAlign: "left", fontSize: "25px" }}>
        Calculate how much you"d spend
      </h1>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0px",
            paddingRight: "60px",
          }}
        >
          <input
            min={1}
            max={200}
            style={{
              margin: "0 16px",
              color: "black",
              background: "transparent",
              border: "none",

              height: "40px",
              fontSize: "30px",
              width: "60px",
              color: "white",
              marginLeft: "0px",
              borderBottom: "1px solid white",
            }}
            value={Value}
            onChange={handleChange}
          />
          <span style={{ fontSize: "14px", textAlign: "left" }}>
            # of users
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            float: "right",
          }}
        >
          <p
            style={{
              display: "flex",
              fontSize: "20px",
              float: "right",
            }}
          >
            $
            <input
              min={4.99}
              max={400.27}
              style={{
                margin: "0 16px",
                color: "black",
                background: "transparent",
                border: "none",

                height: "40px",
                fontSize: "30px",
                width: "110px",
                color: "white",
                marginLeft: "0px",
                borderBottom: "1px solid white",
              }}
              step={4.99}
              value={value2.toFixed(2)}
              onChange={handleChange}
            />{" "}
          </p>
          {/* <p
            min={value2}
            max={456.76}
            style={{
              fontSize: "30px",
              marginBottom: "0px",
              borderBottom: "1px solid white",
              marginRight: "10px",
            }}
          >
            ${value2.toFixed(2)}{" "}
          </p> */}
          <span
            style={{ fontSize: "14px", textAlign: "left", marginTop: "-10px" }}
          >
            Per month(yearly)
          </span>
        </div>
      </div>{" "}
      <div style={{ marginTop: "40px" }}>
        <Slider
          min={1}
          max={200}
          onChange={handleChange}
          style={{ height: "70px" }}
          value={typeof Value === "number" ? Value : 0}
        />
        {/* <Slider /> */}
        <div style={{ display: "flex", textAlign: "left", marginTop: "-50px" }}>
          <p>1</p>
          <p style={{ marginLeft: "200px" }}>200+</p>
        </div>
      </div>
    </div>
  );
}

export default Tcard;
