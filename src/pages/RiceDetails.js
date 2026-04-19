import { useLocation, useNavigate, useParams } from "react-router-dom";
import riceDetails from "../constants/RiceDetails";

function RiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const data = location.state || {};

  const label = data.label || id;
  const confidence = data.confidence;
  const image = data.image;

  const cleanKey = label
    ? label.toLowerCase().replace(/\s+/g, "_")
    : null;

  const details = cleanKey ? riceDetails[cleanKey] : null;

  if (!details) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>❌ No Data Found</h2>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          🔙 Back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        textAlign: "center",
      }}
    >
      <h1>🌾 {details.name}</h1>

      {image && (
        <img
          src={`https://lamiaasadkhan-gr-id-backend.hf.space/uploads/${image}`}
          width="400"
          alt="rice"
          style={{
            borderRadius: "15px",
            marginTop: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            maxWidth: "100%",
          }}
        />
      )}

      {confidence && (
        <h3 style={{ marginTop: "20px" }}>
          🎯 Confidence: {(confidence * 100).toFixed(2)}%
        </h3>
      )}

      <div
        style={{
          background: "white",
          maxWidth: "700px",
          margin: "30px auto",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "left",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h2>📖 Description</h2>
        <p>{details.description}</p>

        <hr />

        <h3>🌱 Agriculture</h3>
        <p>Season: {details.season}</p>
        <p>Sowing: {details.sowing}</p>
        <p>Growth Duration: {details.growth}</p>
        <p>Region: {details.region}</p>
        <p>Yield: {details.yield}</p>

        <hr />

        <h3>🍚 Grain Quality</h3>
        <p>Grain Length: {details.grain_length}</p>
        <p>Cooked Length: {details.cooked_length}</p>
        <p>Color: {details.color}</p>
        <p>Texture: {details.texture}</p>
        <p>Aroma: {details.aroma}</p>

        <hr />

        <h3>⚙️ Processing & Market</h3>
        <p>Processing: {details.processing}</p>
        <p>Advantages: {details.advantages}</p>
        <p>Market: {details.market}</p>

        <hr />

        <h3>🍽️ Usage</h3>
        <p>{details.use}</p>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "12px 25px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        🔙 Back to Dashboard
      </button>
    </div>
  );
}

export default RiceDetails;