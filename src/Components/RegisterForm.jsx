import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Register } from "./Services/authService";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
   
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.warn("Please fix the errors below", {
        position: "top-right",  
        theme: "colored",
      });
      return;
    }
  //  setLoading(true);
    try {
      const result = await Register(formData);
      console.log(result);
      toast.success("Registered successfully!", {
        position: "top-right",
        theme: "colored",
      });
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed. Try again.", 
        {
        position: "top-right",
        theme: "colored",
      });
    } 
  };

  return (
    <>
      <style>{`
        :root {
          --reg-bg: #0f172a;
          --reg-card-bg: #020617;
          --reg-accent: #38bdf8;
          --reg-accent-soft: rgba(56, 189, 248, 0.15);
          --reg-text-main: #e5e7eb;
          --reg-text-muted: #9ca3af;
          --reg-border: rgba(148, 163, 184, 0.25);
          --reg-error: #ef4444;
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
          border: 1px solid var(--reg-border);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.85),
            0 0 0 1px rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
        }

        .reg-title {
          margin: 0 0 4px;
          font-size: 2rem;
          letter-spacing: 0.02em;
          color: var(--reg-text-main);
          text-align: center;
        }

        .reg-subtitle {
          margin: 0 0 28px;
          color: var(--reg-text-muted);
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
          color: var(--reg-text-main);
        }

        .reg-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--reg-border);
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.7);
          color: var(--reg-text-main);
          font-size: 0.95rem;
          transition:
            border-color 0.18s ease,
            box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .reg-input:focus {
          outline: none;
          border-color: var(--reg-accent);
          background: rgba(15, 23, 42, 0.9);
          box-shadow: 0 0 0 3px var(--reg-accent-soft);
        }

        .reg-input::placeholder {
          color: var(--reg-text-muted);
        }

        .error {
          color: var(--reg-error);
          font-size: 0.8rem;
          margin-top: 4px;
        }

        .reg-button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--reg-accent), #0ea5e9);
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
        <form className="reg-card">
          <h2 className="reg-title">Create Account</h2>
          <p className="reg-subtitle">Enter your details to register.</p>

          <div className="reg-field">
            <label className="reg-label">Username</label>
            <input
              className={`reg-input ${errors.username ? "error-border" : ""}`}
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="reg-field">
            <label className="reg-label">Email</label>
            <input
              className={`reg-input ${errors.email ? "error-border" : ""}`}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="reg-field">
            <label className="reg-label">Password</label>
            <input
              className={`reg-input ${errors.password ? "error-border" : ""}`}
              type="password"
              name="password"
              placeholder="Enter password (min 6 chars)"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button className="reg-button" type="submit" onClick={handleSubmit} > 
            Register
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default RegisterForm;
