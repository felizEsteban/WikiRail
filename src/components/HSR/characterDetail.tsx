import { useParams } from "react-router-dom";
import { personajes } from "../../models/HSR/personajeData";
import '../../views/css/characterDetail.css';

export const CharacterDetailH = () => {
  const { id } = useParams();
  const personaje = personajes.find(p => p.id === id);

  if (!personaje) return <div className="personaje-detalle">Personaje no encontrado 🥑</div>;

  const tieneMnemoduende = personaje.mnemoduende &&
    (personaje.mnemoduende.talento.trim() !== "" || personaje.mnemoduende.habilidad.trim() !== "");

  return (
    <div className="personaje-detalle">
      <h1>{personaje.nombre}</h1>

      <img src={personaje.imagen} alt={personaje.nombre} className="personaje-img" />

      <section className="personaje-info">
        <p><strong>Descripción:</strong> {personaje.descripcion}</p>
        <p><strong>Elemento:</strong> {personaje.elemento}</p>
        <p><strong>Vía:</strong> {personaje.via}</p>
        <p><strong>Rareza:</strong> {personaje.rareza}⭐</p>
        <p><strong>Técnica:</strong> {personaje.tecnica}</p>
        <p><strong>Pasiva:</strong> {personaje.pasiva}</p>
      </section>

      <section className="personaje-habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li><strong>Atq Básico:</strong> {personaje.habilidades.atqBasico}</li>
          <li><strong>Habilidad Básica:</strong> {personaje.habilidades.habilidadBasica}</li>
          <li><strong>Ulti:</strong> {personaje.habilidades.ulti}</li>
          <li><strong>Talento:</strong> {personaje.habilidades.talento}</li>
        </ul>
      </section>

      {personaje.habilidadesAdicionales && (
        <section className="personaje-adicionales">
          <h2>Habilidades Adicionales</h2>
          <ul>
            <li><strong>HBD1:</strong> {personaje.habilidadesAdicionales.hbd1}</li>
            <li><strong>HBD2:</strong> {personaje.habilidadesAdicionales.hbd2}</li>
            <li><strong>HBD3:</strong> {personaje.habilidadesAdicionales.hbd3}</li>
          </ul>
        </section>
      )}

      {tieneMnemoduende && (
        <section className="personaje-mnemoduende">
          <h2>Mnemoduende</h2>
          <ul>
            {personaje.mnemoduende.talento && (
              <li><strong>Talento:</strong> {personaje.mnemoduende.talento}</li>
            )}
            {personaje.mnemoduende.habilidad && (
              <li><strong>Habilidad:</strong> {personaje.mnemoduende.habilidad}</li>
            )}
          </ul>
        </section>
      )}

      {/* Sección de Guía */}
      {personaje.guia && (
        <section className="personaje-guia">
          <h2>Guía</h2>

          <h3>Mejores Artefactos y Ornamentos</h3>
          <div className="artefactos">
            {personaje.guia.artefactos.map((artefacto, index) => (
              <div key={index} className="artefacto">
                <img src={artefacto.imagen} alt={artefacto.nombre} className="artefacto-img" />
                <p>{artefacto.nombre}</p>
              </div>
            ))}
          </div>

          <h3>Cono de Luz recomendado</h3>
          <div className="cono-luz">
            {personaje.guia.conoDeLuz.map((cono, index) => (
              <div key={index} className="cono-luz-item">
                <img src={cono.imagen} alt={cono.nombre} className="cono-luz-img" />
                <p>{cono.nombre}</p>
              </div>
            ))}
          </div>

          <h3>Mejores Composiciones de Equipo</h3>
          <div className="composiciones-equipo">
            {personaje.guia.composicionesEquipo.map((composicion, index) => (
              <div key={index} className="composicion">
                <img src={composicion.imagen} alt={composicion.personaje} className="composicion-img" />
                <p>{composicion.personaje}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
