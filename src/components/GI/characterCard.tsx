// src/components/GI/CharacterCard.tsx
import type { Personaje } from "../../models/GI/personajeModel";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../views/css/characterCard.css";

interface Props {
  personaje: Personaje;
}

export const CharacterCard = ({ personaje }: Props) => (
  <div className="character-card">
    <div className="character-image-container">
      <LazyLoadImage
        src={personaje.imagen}
        alt={personaje.nombre}
        effect="blur"
        width="100%"
        height="200px"
      />
    </div>
    <div className="character-info">
      <h2 className="character-name">{personaje.nombre}</h2>
      <div className="character-icons">
        <img src={personaje.elemento} alt="elemento" className="character-icon" />
        <img src={personaje.arma} alt="arma" className="character-icon" />
      </div>
      <Link to={`/personajeGI/${personaje.id}`} className="character-link">
        Ver detalles
      </Link>
    </div>
  </div>
);
