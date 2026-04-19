import { useState } from "react";
import logo from "../assets/Logo.jpeg";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      return setError("All fields required");
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://lamiaasadkhan-gr-id-backend.hf.space/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setError(data.error || "Login failed");
      }

      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("email", email);

      setLoading(false);
      navigate("/dashboard");
    } catch {
      setLoading(false);
      setError("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="logo" className="logo" />

        <h2>Welcome Back 👋</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="error">{error}</p>}

        <p className="switch">
          Don't have account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;