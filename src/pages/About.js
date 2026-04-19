import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "50px",
          background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1
            style={{
              fontSize: "46px",
              color: "#1b5e20",
              marginBottom: "10px",
            }}
          >
            About GR-ID
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#2e7d32",
            }}
          >
            AI-Based Rice Grain Identification System
          </p>

          <p
            style={{
              color: "#444",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            Final Year Project developed at Ghulam Ishaq Khan Institute of
            Engineering Sciences and Technology (GIKI)
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            background: "white",
            maxWidth: "1100px",
            margin: "auto",
            padding: "40px",
            borderRadius: "25px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            borderLeft: "8px solid #2e7d32",
          }}
        >
          <h2
            style={{
              color: "#1b5e20",
              fontSize: "34px",
              marginBottom: "25px",
            }}
          >
            🎯 Project Overview
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            GR-ID is an intelligent rice classification system developed to
            identify different rice varieties using image-based deep learning.
            The platform allows users to upload rice grain images and receive
            instant predictions with confidence scores.
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            This project focuses on solving the challenge of manual rice
            identification, which can be time-consuming and inconsistent. By
            using artificial intelligence, GR-ID provides a faster, smarter, and
            more reliable solution for grain recognition.
          </p>

          {/* FEATURES */}
          <Feature text="Supports classification of 5 rice varieties" />
          <Feature text="Image upload with instant AI prediction" />
          <Feature text="Displays confidence percentage for results" />
          <Feature text="Simple dashboard for users and researchers" />
          <Feature text="Useful for agriculture, trade, and learning purposes" />
        </div>

        {/* STATS */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <StatCard number="5" label="Rice Types Supported" />
          <StatCard number="AI" label="Deep Learning Powered" />
          <StatCard number="Fast" label="Instant Prediction" />
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "50px",
            background: "white",
            maxWidth: "1100px",
            marginInline: "auto",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#1b5e20" }}>
            Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
          </h2>

          <p style={{ color: "#2e7d32", marginTop: "10px" }}>
            Faculty of Computer Science & Engineering
          </p>

          <p style={{ color: "#555" }}> Topi, Pakistan</p>
        </div>
      </div>
    </>
  );
}

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div
      style={{
        background: "#e8f5e9",
        padding: "16px 20px",
        borderRadius: "30px",
        marginBottom: "15px",
        color: "#1b5e20",
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      ✅ {text}
    </div>
  );
}

/* STAT CARD */
function StatCard({ number, label }) {
  return (
    <div
      style={{
        background: "white",
        width: "280px",
        padding: "35px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#1b5e20",
          fontSize: "52px",
          margin: "0",
        }}
      >
        {number}
      </h1>

      <p
        style={{
          color: "#2e7d32",
          fontWeight: "bold",
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default About;