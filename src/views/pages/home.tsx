import '../css/home.css';
import { Link } from 'react-router-dom';
import {
  FaUserAlt,
  FaTrophy,
  FaBook,
  FaCalculator,
  FaNewspaper,
  FaArrowRight
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

export function Home() {
  // Datos de las tarjetas de navegación
  const featureCards = [
    {
      title: "Personajes",
      description: "Explora todos los personajes disponibles con estadísticas detalladas",
      icon: <FaUserAlt size={28} />,
      path: "/characters",
      bgColor: "var(--gradient-dark)"
    },
    /*
    {
      title: "Tier Lists",
      description: "Descubre las mejores composiciones y valoraciones de personajes",
      icon: <FaTrophy size={28} />,
      path: "/tierlists",
      bgColor: "var(--gradient-dark)"
    },
    */
    {
      title: "Guías",
      description: "Aprende estrategias avanzadas y consejos para cada modo de juego",
      icon: <FaBook size={28} />,
      path: "/guides",
      bgColor: "var(--gradient-dark)"
    },
        {
      title: "Equipamiento",
      description: "Mejores armas, relicarios y conjuntos de artefactos",
      icon: <IoMdSettings size={28} />,
      path: "/equipment",
      bgColor: "var(--gradient-dark)"
    },
    /*
    {
      title: "Calculadoras",
      description: "Herramientas para optimizar builds y recursos",
      icon: <FaCalculator size={28} />,
      path: "/calculators",
      bgColor: "var(--gradient-dark)"
    },
    */
    {
      title: "Noticias",
      description: "Mantente al día con los últimos eventos y actualizaciones",
      icon: <FaNewspaper size={28} />,
      path: "/news",
      bgColor: "var(--gradient-dark)"
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="home-title">Bienvenido a <span className="brand-accent">WikiRail</span></h1>
        <p className="hero-description">
          Tu fuente definitiva de información para Honkai Star Rail. Datos actualizados,
          guías expertas y herramientas para mejorar tu experiencia de juego.
        </p>
      </div>

      <div className="features-grid">
        {featureCards.map((card, index) => (
          <Link to={card.path} key={index} className="feature-card" style={{ backgroundColor: card.bgColor }}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-arrow">
              <FaArrowRight size={18} />
            </div>
          </Link>
        ))}
      </div>

      <div className="info-sections">
        <section className="about-section">
          <h2>Sobre WikiRail</h2>
          <p>
            WikiRail es una plataforma creada por fans para fans de Honkai Star Rail. Nuestro equipo de editores
            trabaja constantemente para mantener la información actualizada con los últimos parches y contenido.
          </p>
          <p>
            ¿Quieres colaborar? Únete a nuestra comunidad y ayuda a mejorar esta wiki para todos los jugadores.
          </p>
        </section>

        <section className="update-section">
          <h2>Última Actualización</h2>
          <div className="update-card">
            <h3>Versión 2.3 - "Cielos Desplegados"</h3>
            <ul>
              <li>Nuevos personajes: Firefly y Jade</li>
              <li>Evento limitado "Planos de Batalla"</li>
              <li>Nueva zona: División de Investigación Secreta</li>
              <li>Balanceo de personajes y ajustes de juego</li>
            </ul>
            <p className="update-date">Publicado: 19 de junio, 2024</p>
          </div>
        </section>
      </div>

    </div>
  );
}