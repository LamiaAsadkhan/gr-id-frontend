import { useState } from "react";
import logo from "../assets/Logo.jpeg";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      return setError("Please enter email and password");
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://lamiaasadkhan-gr-id-backend.hf.space/signup",
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
        return setError(data.error || "Signup failed");
      }

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      setLoading(false);
    } catch {
      setLoading(false);
      setError("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="logo" className="logo" />

        <h2>Create Account</h2>

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

        <button onClick={handleSignup} disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p className="switch">
          Already have account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;