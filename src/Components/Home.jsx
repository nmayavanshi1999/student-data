import React from "react";
import { Link, Outlet } from "react-router";

function Home() {
  return (
    <>
      <style>{`
        :root {
          --home-bg: #0f172a;
          --home-card-bg: #020617;
          --home-accent: #38bdf8;
          --home-accent-soft: rgba(56, 189, 248, 0.15);
          --home-text-main: #e5e7eb;
          --home-text-muted: #9ca3af;
          --home-border: rgba(148, 163, 184, 0.25);
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

        .home-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .home-card {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), #020617);
          border-radius: 20px;
          padding: 32px 28px 24px;
          border: 1px solid var(--home-border);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.85),
            0 0 0 1px rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
        }

        .home-title {
          margin: 0 0 8px;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
          color: var(--home-text-main);
        }

        .home-subtitle {
          margin: 0 0 24px;
          color: var(--home-text-muted);
          font-size: 0.95rem;
        }

        .home-nav {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .home-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration: none;
          color: var(--home-text-main);
          font-size: 0.95rem;
          border: 1px solid transparent;
          background: rgba(15, 23, 42, 0.7);
          transition:
            background 0.18s ease,
            border-color 0.18s ease,
            transform 0.12s ease,
            box-shadow 0.18s ease;
        }

        .home-link::after {
          content: "›";
          font-size: 1.1rem;
          opacity: 0.55;
        }

        .home-link:hover {
          background: var(--home-accent-soft);
          border-color: var(--home-accent);
          transform: translateY(-1px);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.9);
        }

        .home-link-primary {
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          color: #0b1220;
          font-weight: 600;
        }

        .home-link-primary:hover {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          border-color: transparent;
        }

        @media (max-width: 480px) {
          .home-card {
            padding: 24px 18px 18px;
            border-radius: 16px;
          }

          .home-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="home-wrapper">
        <div className="home-card">
          <h1 className="home-title">Welcome Home</h1>
          <p className="home-subtitle">Choose a section to continue.</p>

          <nav className="home-nav">
            <Link to="about" className="home-link">
              About
            </Link>
            <Link to="studenttable" className="home-link">
              Students Table
            </Link>
            <Link to="studenttable/John" className="home-link">
              Student Details
            </Link>
            <Link to="Product" className="home-link">
              Product List
            </Link>
            <Link to="Login" className="home-link home-link-primary">
              Login
            </Link>
            <Link to="RegisterForm" className="home-link">
              Register
            </Link>
            <Link to="Todo" className="home-link">
              Todo
            </Link>
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
