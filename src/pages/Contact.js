import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          minHeight: "100vh",
          background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        }}
      >
        {/* HEADER */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#1b5e20",
            marginBottom: "10px",
          }}
        >
          📞 Get in Touch
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Connect with our research team and learn more about the GR-ID platform
        </p>

        {/* TEAM CARDS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* RESEARCH TEAM */}
          <div style={cardStyle}>
            <h2 style={titleStyle}>Research Team</h2>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={nameStyle}>Muhammad Qasim Riaz</h4>
              <p style={subText}>Project Supervisor</p>
              <small>Faculty of Computer Science & Engineering</small>
            </div>

            <hr />

            <div style={{ marginTop: "20px" }}>
              <h4 style={nameStyle}>Dr. Khurram Jadoon</h4>
              <p style={subText}>Co-Supervisor</p>
              <small>Faculty of Computer Science & Engineering</small>
            </div>
          </div>

          {/* DEVELOPMENT TEAM */}
          <div style={cardStyle}>
            <h2 style={titleStyle}>💻 Development Team</h2>

            <p style={{ color: "#388e3c", fontSize: "14px" }}>
              Data Science Batch 2022–2026
            </p>

            
            <Member
              name="Ayesha Faheem"
              email="ayeshafaheem463@gmail.com"
              id="2022131"
            />

            <Member
              name="Fatima Zahra Shabbir"
              email="fatimashabbir1506@gmail.com"
              id="2022173"
            />

            <Member
              name="Khadija Nawaz"
              email="khadijatarar777@gmail.com"
              id="2022250"
            />

            <Member
              name="Lamia Asad Khan"
              email="lamiaasadkhan@gmail.com"
              id="2022258"
            />
          </div>
        </div>

        {/* INSTITUTE CARD */}
        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            maxWidth: "1200px",
            marginInline: "auto",
          }}
        >
          <h2 style={{ color: "#1b5e20" }}>
             Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
            (GIKI)
          </h2>

          <div style={{ marginTop: "15px" }}>
            <span style={badgeStyle}>FCSE</span>
            <span style={badgeStyle}>BS Data Science (2022–2026)</span>
          </div>

          <p style={{ marginTop: "15px", color: "#2e7d32" }}>
            📍 Topi, Pakistan
          </p>
        </div>
      </div>
    </>
  );
}

/* COMPONENT FOR MEMBERS */
function Member({ name, email, id }) {
  return (
    <div style={{ marginTop: "18px" }}>
      <h4 style={nameStyle}>{name}</h4>
      <p style={subText}>{email}</p>
      <span style={badgeStyle}>{id}</span>
    </div>
  );
}

/* COMMON STYLES */
const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  width: "380px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
  borderTop: "5px solid #2e7d32",
};

const titleStyle = {
  marginBottom: "20px",
  color: "#1b5e20",
};

const nameStyle = {
  marginBottom: "5px",
  color: "#1b5e20",
};

const subText = {
  color: "#555",
  margin: "0",
};

const badgeStyle = {
  display: "inline-block",
  background: "#e8f5e9",
  color: "#2e7d32",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  marginTop: "6px",
  marginRight: "6px",
  fontWeight: "bold",
};

export default Contact;