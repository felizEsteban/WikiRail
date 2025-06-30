import { useState, useEffect, useRef } from "react";
import { personajes } from "../../models/HSR/personajeData";
import { CharacterCard } from "../../components/HSR/characterCard";
import { FiSearch } from "react-icons/fi";
import "../css/personajePage.css";

const PersonajePage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<number>(12);
  const [busqueda, setBusqueda] = useState("");
  const [filtroElemento, setFiltroElemento] = useState("todos");
  const [filtroVia, setFiltroVia] = useState("todos");
  const containerRef = useRef<HTMLDivElement>(null);

  const personajesFiltrados = personajes.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideElemento = filtroElemento === "todos" || p.elemento.includes(filtroElemento);
    const coincideVia = filtroVia === "todos" || p.via.includes(filtroVia);
    return coincideNombre && coincideElemento && coincideVia;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.offsetHeight - 500
      ) {
        setVisibleCharacters(prev => Math.min(prev + 8, personajesFiltrados.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [personajesFiltrados.length]);

  return (
    <div className="personajes-container">
      <h1 className="personajes-title">Personajes de Honkai Star Rail</h1>

      {/* Filtros compactos */}
      <div className="filtros-combinados">
        <div className="filtro-busqueda">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar personaje..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
        </div>

        <select value={filtroElemento} onChange={e => setFiltroElemento(e.target.value)}>
          <option value="todos">Elemento</option>
          <option value="Physical">Physical</option>
          <option value="Fire">Fire</option>
          <option value="Ice">Ice</option>
          <option value="Lightning">Lightning</option>
          <option value="Wind">Wind</option>
          <option value="Quantum">Quantum</option>
          <option value="Imaginary">Imaginary</option>
        </select>

        <select value={filtroVia} onChange={e => setFiltroVia(e.target.value)}>
          <option value="todos">Vía</option>
          <option value="The Destruction">Destruction</option>
          <option value="The Hunt">Hunt</option>
          <option value="The Erudition">Erudition</option>
          <option value="The Harmony">Harmony</option>
          <option value="The Nihility">Nihility</option>
          <option value="The Preservation">Preservation</option>
          <option value="The Abundance">Abundance</option>
        </select>
      </div>

      {/* Resultados */}
      {personajesFiltrados.length === 0 ? (
        <div className="no-result">
          <p>No se encontraron personajes con los filtros actuales</p><strong>unu</strong>
        </div>
      ) : (
        <>
          <div className="personaje-grid" ref={containerRef}>
            {personajesFiltrados.slice(0, visibleCharacters).map(p => (
              <CharacterCard key={p.id} personaje={p} />
            ))}
          </div>

          {visibleCharacters < personajesFiltrados.length && (
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <p>Cargando más personajes...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PersonajePage;
