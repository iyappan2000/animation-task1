import React from "react";
import "./Fcard.css";
function Fcard() {
  return (
    <div className="f-card">
      <h2>Free</h2>
      <h1 style={{ fontSize: 50, marginTop: "-6px", marginLeft: "-26px" }}>
        <span style={{ fontSize: 20, marginRight: " 10px" }}>$</span>0{" "}
      </h1>
      <p
        style={{
          color: "gray",
          paddingLeft: "10px",
          fontSize: "13px",
          marginTop: "-20px",
        }}
      >
        per user/month
      </p>
      <p style={{ fontWeight: "650" }}>
        Unlimited
        <span style={{ color: "gray", paddingLeft: "4px", fontWeight: "400" }}>
          Users
        </span>
      </p>
      <p style={{ fontWeight: "650" }}>
        Basic
        <span style={{ color: "gray", paddingLeft: "4px", fontWeight: "400" }}>
          Permissions
        </span>
      </p>
      <p style={{ fontWeight: "650" }}>
        100 MB
        <span style={{ color: "gray", paddingLeft: "4px", fontWeight: "400" }}>
          Total Storage
        </span>
      </p>
    </div>
  );
}

export default Fcard;
