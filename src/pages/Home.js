import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../Logo.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <h2>GR-ID</h2>
        </div>

        <div className="nav-buttons">
          <button onClick={() => navigate("/login")}>Login</button>

          <button
            className="signup"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-card">
          <h1>Smart Rice Detection Platform</h1>

          <p>
            AI-powered rice grain recognition system designed to classify
            five rice varieties with fast, accurate, and reliable results.
          </p>

          <button onClick={() => navigate("/signup")}>
            Get Started 
          </button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div
        className="about"
        style={{
          background: "linear-gradient(to right, #d4fc79, #96e6a1)",
          padding: "60px 20px",
        }}
      >
        <h2>About GR-ID Platform</h2>

        <p>
          Developed at Ghulam Ishaq Khan Institute of Engineering Sciences
          and Technology, GR-ID combines deep learning with agriculture to
          provide intelligent rice classification solutions.
        </p>

        <div className="features">
          <div className="card">
            <h3>AI Powered</h3>
            <p>Deep learning model trained for rice identification</p>
          </div>

          <div className="card">
            <h3>Easy Detection</h3>
            <p>Upload rice image and receive instant predictions</p>
          </div>

          <div className="card">
            <h3>Agriculture Focused</h3>
            <p>Supports farmers, traders, and research learning</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div>
          <h1>≥90%</h1>
          <p>Accuracy</p>
        </div>

        <div>
          <h1>5</h1>
          <p>Rice Types</p>
        </div>

        <div>
          <h1>Fast</h1>
          <p>Prediction</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
