import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import riceDetails from "../constants/RiceDetails";
import { BASE_URL } from "../config";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    if (!user_id) {
      navigate("/login");
    }
  }, [user_id, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Select image first");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("user_id", user_id);

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Server error. Try again.");
    }

    setLoading(false);
  };

  const getBestRice = () => {
    if (!result || !result.detections || result.detections.length === 0)
      return null;

    return result.detections.reduce((prev, current) =>
      current.confidence > prev.confidence ? current : prev
    );
  };

  const bestRice = getBestRice();

  const getRiceKey = (label) => {
    if (!label) return null;
    return label.toLowerCase().replace(/\s+/g, "_");
  };

  const riceKey = bestRice ? getRiceKey(bestRice.label) : null;
  const riceInfo = riceKey ? riceDetails[riceKey] : null;

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #d4fc79, #96e6a1)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1> GR-ID Dashboard</h1>
        <p>Upload rice image and get AI classification</p>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            width: "400px",
            margin: "auto",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          <input type="file" onChange={handleImageChange} />

          {preview && (
            <div style={{ marginTop: "15px" }}>
              <img
                src={preview}
                alt="preview"
                width="250"
                style={{ borderRadius: "10px" }}
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            🚀 Upload & Predict
          </button>
        </div>

        {loading && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            🤖 AI is analyzing your image...
          </p>
        )}

        {bestRice && (
          <div
            style={{
              marginTop: "40px",
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              width: "500px",
              marginInline: "auto",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ color: "#2e7d32" }}>
              🌾 {bestRice.label.replace("_", " ").toUpperCase()}
            </h2>

            <img
              src={`${BASE_URL}/uploads/${result.image}`}
              width="100%"
              alt="result"
              style={{ borderRadius: "15px", marginTop: "10px" }}
            />

            <p style={{ marginTop: "15px", fontSize: "18px" }}>
              🎯 Confidence: {(bestRice.confidence * 100).toFixed(2)}%
            </p>

            {riceInfo && (
              <button
                onClick={() =>
                  navigate(`/rice/${riceKey}`, {
                    state: {
                      ...riceInfo,
                      label: bestRice.label,
                      confidence: bestRice.confidence,
                      image: result.image,
                    },
                  })
                }
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  background: "#1565c0",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                📖 View Full Details
              </button>
            )}
          </div>
        )}

        {result && result.detections.length === 0 && (
          <p style={{ marginTop: "20px" }}>❌ No rice Type detected</p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
