import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "./Services/authService";



function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.username) {
      errors.username = "username is required";
    } 
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return { isValid: Object.keys(errors).length === 0, errors };
  };

  const handleLogin =  async (e) => {
   e.preventDefault();
    const isValid = validate();
    if (!isValid.isValid) {
      toast.warn("Please fix the errors below", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }
    try {
const result = await loginUser(form);
console.log(result)
if(result.data.success){
  toast.success(result.data.message, {
    position: "top-right",
    theme: "colored",
  });
  setForm({ username: "", password: "" });
  
} else if(result.response.data){
toast.error(result.response.data.message,{ 
  position: "top-right",
  theme: "colored",});
} else {
  toast.error("somthing went wrong")
}
    } catch (error) {
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      <style>{`
        :root {
          --login-bg: #0f172a;
          --login-card-bg: #020617;
          --login-accent: #38bdf8;
          --login-accent-soft: rgba(56, 189, 248, 0.15);
          --login-text-main: #e5e7eb;
          --login-text-muted: #9ca3af;
          --login-border: rgba(148, 163, 184, 0.25);
          --login-error: #ef4444;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top, #1d2433 0%, #020617 55%);
          min-height: 100vh;
        }

        .reg-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .reg-card {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), #020617);
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid var(--login-border);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.85),
            0 0 0 1px rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
        }

        .reg-title {
          margin: 0 0 4px;
          font-size: 2rem;
          letter-spacing: 0.02em;
          color: var(--login-text-main);
          text-align: center;
        }

        .reg-subtitle {
          margin: 0 0 28px;
          color: var(--login-text-muted);
          font-size: 0.95rem;
          text-align: center;
        }

        .reg-field {
          margin-bottom: 20px;
        }

        .reg-label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--login-text-main);
        }

        .reg-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--login-border);
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.7);
          color: var(--login-text-main);
          font-size: 0.95rem;
          transition:
            border-color 0.18s ease,
            box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .reg-input:focus {
          outline: none;
          border-color: var(--login-accent);
          background: rgba(15, 23, 42, 0.9);
          box-shadow: 0 0 0 3px var(--login-accent-soft);
        }

        .reg-input::placeholder {
          color: var(--login-text-muted);
        }

        .error {
          color: var(--login-error);
          font-size: 0.8rem;
          margin-top: 4px;
        }

        .reg-button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--login-accent), #0ea5e9);
          color: #0b1220;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.18s ease,
            transform 0.12s ease,
            box-shadow 0.18s ease;
        }

        .reg-button:hover {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          transform: translateY(-1px);
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.4);
        }

        .reg-button:active {
          transform: translateY(0);
        }

        @media (max-width: 480px) {
          .reg-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .reg-title {
            font-size: 1.7rem;
          }
        }
      `}</style>

      <div className="reg-page">
        <form className="reg-card" onSubmit={handleLogin}>
          <h2 className="reg-title">Log in</h2>
          <h5 className="reg-subtitle">Enter your details</h5>

          <div className="reg-field">
            <label className="reg-label">username</label>
            <input
              className={`reg-input ${errors.username ? "error-border" : ""}`}
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="reg-field">
            <label className="reg-label">Password</label>
            <input
              className={`reg-input ${errors.password ? "error-border" : ""}`}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button className="reg-button" type="submit">
            Log in
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
