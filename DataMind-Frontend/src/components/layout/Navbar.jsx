import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);


  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <a href="/" className="logo">
          <div className="logo_div">
            <img
              src="logo/image.png"
              alt="DataMind Logo"
              className="logo_image"
            />
          </div>
          <span>DataMind</span>
        </a>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link to="/docs" className="nav-link">
          Docs
        </Link>
        <button className="try-btn">
          <Link to="/" className="nav-link">
            Try Now
          </Link>
        </button>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
