import type { Personaje } from "../../models/GI/personajeModel";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../views/css/characterCard.css';

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
      <p className="character-elemento">{personaje.elemento} • {personaje.arma}</p>
      <Link 
        to={`/personajeGI/${personaje.id}`} 
        className="character-link"
      >
        Ver detalles
      </Link>
    </div>
  </div>
);
