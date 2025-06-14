import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logoWR.svg';
import '../css/footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="WikiRail Logo" className="footer-logo" />
          <span className="footer-title">WikiRail</span>
        </div>
        
        <div className="footer-center">
          <p>© 2025 WikiRail. Todos los derechos reservados.</p>
        </div>
        
        <div className="footer-right">
          <a href="https://linkedin.com/in/estebanhernandez-dev/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/felizEsteban" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="mailto:estebanhernandez.dev@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}