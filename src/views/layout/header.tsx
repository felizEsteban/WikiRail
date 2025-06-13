import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoWR.svg';
import '../css/header.css';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme ? savedTheme === 'dark' : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img className="logo" src={logo} alt="WikiRail Logo" />
        </div>
        
        <h1 className="title">WikiRail</h1>
        
        <div className="nav-right">
          <Link to="/pagina1" className="nav-link">Página 1</Link>
          <Link to="/pagina2" className="nav-link">Página 2</Link>
          <button 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}