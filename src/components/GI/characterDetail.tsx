import { useParams } from "react-router-dom";
import { personajes } from "../../models/GI/personajeData";
import '../../views/css/characterDetail.css';

export const CharacterDetailG = () => {
  const { id } = useParams();
  const personaje = personajes.find(p => p.id === id);

  if (!personaje) return <div className="personaje-detalle">Personaje no encontrado 🥑</div>;

  return (
    <div className="personaje-detalle">
      <h1>{personaje.nombre}</h1>

      <img src={personaje.imagen} alt={personaje.nombre} className="personaje-img" />

      <section className="personaje-info">
        <p><strong>Descripción:</strong> {personaje.descripcion}</p>
        <p><strong>Elemento:</strong> {personaje.elemento}</p>
        <p><strong>Arma:</strong> {personaje.arma}</p>
        <p><strong>Región:</strong> {personaje.region}</p>
        <p><strong>Rareza:</strong> {personaje.rareza}⭐</p>
        <p><strong>Técnica:</strong> {personaje.tecnica}</p>
        <p><strong>Pasiva:</strong> {personaje.pasiva}</p>
      </section>

      <section className="personaje-habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li><strong>Atq Básico:</strong> {personaje.habilidades.atqBasico}</li>
          <li><strong>Habilidad Elemental:</strong> {personaje.habilidades.habilidadBasica}</li>
          <li><strong>Ulti:</strong> {personaje.habilidades.ulti}</li>
          <li><strong>Talento:</strong> {personaje.habilidades.talento}</li>
        </ul>
      </section>

      {personaje.habilidadesAdicionales && (
        <section className="personaje-adicionales">
          <h2>Habilidades Adicionales</h2>
          <ul>
            {personaje.habilidadesAdicionales.hbd1 && (
              <li><strong>HBD1:</strong> {personaje.habilidadesAdicionales.hbd1}</li>
            )}
            {personaje.habilidadesAdicionales.hbd2 && (
              <li><strong>HBD2:</strong> {personaje.habilidadesAdicionales.hbd2}</li>
            )}
            {personaje.habilidadesAdicionales.hbd3 && (
              <li><strong>HBD3:</strong> {personaje.habilidadesAdicionales.hbd3}</li>
            )}
          </ul>
        </section>
      )}
    </div>
  );
};
