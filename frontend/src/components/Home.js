import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Title */}
      <h1 className="home-title">Performance-Tracker 🚀</h1>

      {/* Subtitle */}
      <p className="home-subtitle">
        Track your daily efforts, tasks, and working hours in one simple dashboard. 
        Stay productive and measure your growth day by day!
      </p>

      {/* Buttons */}
      <div className="home-buttons">
        <button onClick={() => navigate("/login")} className="btn primary">
          Login
        </button>
        <button onClick={() => navigate("/signup")} className="btn secondary">
          Sign Up
        </button>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        © {new Date().getFullYear()} Performance Tracker | Built with ❤️ by Mawa
      </footer>
    </div>
  );
}
