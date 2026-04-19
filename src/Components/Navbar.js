import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo.jpeg"; // ✅ FIXED IMPORT

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user_id = localStorage.getItem("user_id");

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/", { replace: true });
  };

  const linkStyle = (path) => ({
    margin: "0 12px",
    color: location.pathname === path ? "#c8facc" : "white",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "500",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 40px",
        background: "rgba(46,125,50,0.95)",
        backdropFilter: "blur(8px)",
        color: "white",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* 🔹 Logo Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="GR-ID Logo"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            objectFit: "cover",
            background: "white",
            padding: "3px",
            transition: "0.3s",
          }}
        />

        <h2 style={{ margin: 0, letterSpacing: "1px" }}>GR-ID</h2>
      </div>

      {/* 🔹 Links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/about" style={linkStyle("/about")}>About</Link>
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>

        {!user_id ? (
          <>
            <Link to="/login" style={linkStyle("/login")}>Login</Link>
            <Link to="/signup" style={linkStyle("/signup")}>Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={linkStyle("/dashboard")}>Dashboard</Link>
            <Link to="/history" style={linkStyle("/history")}>History</Link>

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "15px",
                padding: "6px 14px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                background: "white",
                color: "#2e7d32",
                fontWeight: "bold",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#c8facc")}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;