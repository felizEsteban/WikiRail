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
        <p><strong>Elemento:</strong> <img src={personaje.elemento} alt="elemento" className="character-icon" /></p>
        <p><strong>Arma:</strong> <img src={personaje.arma} alt="arma" className="character-icon" /></p>
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

      {personaje.guia && (
        <section className="personaje-guia">
          <h2>Guía</h2>

          <h3>Mejores Artefactos</h3>
          <div className="grid-items">
            {personaje.guia.artefactos.map((a, index) => (
              <div key={index} className="guia-item">
                <img src={a.imagen} alt={a.nombre} />
                <p>{a.nombre}</p>
              </div>
            ))}
          </div>

          <h3>Armas Recomendadas</h3>
          <div className="grid-items">
            {personaje.guia.arma.map((a, index) => (
              <div key={index} className="guia-item">
                <img src={a.imagen} alt={a.nombre} />
                <p>{a.nombre}</p>
              </div>
            ))}
          </div>

          <h3>Mejores Composiciones de Equipo</h3>
          <div className="grid-items">
            {personaje.guia.composicionesEquipo.map((c, index) => (
              <div key={index} className="guia-item">
                <img src={c.imagen} alt={c.personaje} />
                <p>{c.personaje}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
