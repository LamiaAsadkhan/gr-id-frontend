import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { BASE_URL } from "../config";

function History() {
  const [history, setHistory] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`${BASE_URL}/history/${user_id}`);
        const data = await res.json();
        setHistory(data);
      } catch (err) {
        console.log("Error fetching history", err);
      }
    };

    if (user_id) {
      fetchHistory();
    }
  }, [user_id]);

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
        <h1>📜 Prediction History</h1>

        {history.length === 0 ? (
          <p>No history found</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {history.map((item, index) => {
              const label =
                item.label && typeof item.label === "string"
                  ? item.label.replace("_", " ")
                  : "unknown";

              return (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "15px",
                    width: "300px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src={`${BASE_URL}/uploads/${item.image_path}`}
                    alt="history"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />

                  <h3 style={{ marginTop: "10px", color: "#2e7d32" }}>
                    🌾 {label.toUpperCase()}
                  </h3>

                  <p>
                    🎯 Confidence: {(item.confidence * 100).toFixed(2)}%
                  </p>

                  <p style={{ fontSize: "12px", color: "gray" }}>
                    {item.timestamp}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default History;