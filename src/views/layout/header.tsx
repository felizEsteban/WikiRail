import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoWR.svg';
import '../css/header.css';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <nav className="nav">
        <div className="nav-top">
          <div className="logo-title-container">
            <img className="logo" src={logo} alt="WikiRail Logo" />
            <h1 className="title">WikiRail</h1>
          </div>

          <div className="desktop-nav">
            <div className="nav-links-container">
              <Link to="/personajeHSR" className="nav-link">
                Honkai: Star Rail
              </Link>
              <Link to="/personajeGI" className="nav-link">
                Genshin Impact
              </Link>
            </div>

            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Botón visible solo en móvil */}
          <button
            className="mobile-dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Línea divisoria solo en móvil */}
        <div className="mobile-divider"></div>

        {/* Navegación móvil */}
        <div className="mobile-nav-links">
          <Link to="/personajeHSR" className="nav-link">
            Honkai: Star Rail
          </Link>
          <Link to="/personajeGI" className="nav-link">
            Genshin Impact
          </Link>
        </div>
      </nav>
    </header>
  );
}