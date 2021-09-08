import React from "react";
import { Switch } from "antd";
import "./Fcard.css";
function Scard() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="s-card">
      <h2>Premium</h2>
      <h1 style={{ fontSize: 50, marginTop: "-6px" }}>
        <span style={{ fontSize: 20, padding: 10 }}>$</span>4{" "}
        <span style={{ fontSize: 20, paddingLeft: "-20px" }}>.99</span>
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
      <div
        style={{
          display: "flex",
          textAlign: "center",
          marginLeft: "30px",
          padding: "15px",
        }}
      >
        <p style={{ fontWeight: "500", paddingRight: "10px" }}>Monthly</p>
        <Switch defaultChecked onChange={onChange} />
        <p style={{ fontWeight: "500", paddingLeft: "10px" }}>Yearly</p>
      </div>
      <p style={{ fontWeight: "650" }}>
        Free Guest
        <span style={{ color: "gray", paddingLeft: "6px", fontWeight: "400" }}>
          Users
        </span>
      </p>
      <p style={{ fontWeight: "650" }}>
        Advanced
        <span style={{ color: "gray", paddingLeft: "6px", fontWeight: "400" }}>
          Permissions
        </span>
      </p>
      <p style={{ fontWeight: "650" }}>
        +10 GB
        <span style={{ color: "gray", paddingLeft: "6px", fontWeight: "400" }}>
          Storage per User
        </span>
      </p>
      <p style={{ fontWeight: "650" }}>
        Priority
        <span style={{ color: "gray", paddingLeft: "6px", fontWeight: "400" }}>
          support
        </span>
      </p>
    </div>
  );
}

export default Scard;
