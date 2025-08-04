import { replace, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../src/api";
import "../../styles/main/login.css";
import { useState } from "react";
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/host";
  function handleChange(event) {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    loginUser(credentials)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => setStatus("idle"));
  }

  return (
    <section className="login-page">
      {location.state?.message && <h3>{location.state.message}</h3>}
      <h1>Sign in to your account</h1>
      {error?.message && <h3>{error.message}</h3>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={credentials.email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" disabled={status === "submitting"}>
          {status === "idle" ? "Log In" : "Logging in..."}
        </button>
      </form>
    </section>
  );
}
