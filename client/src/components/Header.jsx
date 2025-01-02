import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../css/Header.css";
import logo from "../assets/EduVerseLogo.png";

const Header = () => {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="EduVerse Logo" className="logo" />{" "}
        <h1 className="logo" style={{ marginBottom: "7px" }}>
          EduVerse
        </h1>
      </div>
      <div className="nav-links" style={{ alignItems: "center" }}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/create" className="nav-item">
          Create NFT
        </Link>
        <Link to="/profile" className="nav-item">
          Profile
        </Link>
        <div style={{ marginRight: "40px" }}>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
