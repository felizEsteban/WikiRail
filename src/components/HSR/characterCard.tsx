import type { Personaje } from "../../models/HSR/personajeModel";
import { Link } from "react-router-dom";

interface Props {
  personaje: Personaje;
}
export const CharacterCard = ({ personaje }: Props) => (
  <div className="card">
    <img src={personaje.imagen} alt={personaje.nombre} />
    <h2>{personaje.nombre}</h2>
    <Link to={`/personajeHSR/${personaje.id}`}>Ver más</Link>
  </div>
);
