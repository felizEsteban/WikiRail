import { useState, useEffect, useRef } from "react";
import { personajes } from "../../models/GI/personajeData";
import { CharacterCard } from "../../components/GI/characterCard";
import { FiSearch } from "react-icons/fi";
import "../css/personajePage.css";

const PersonajePage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<number>(12);
  const [busqueda, setBusqueda] = useState("");
  const [filtroElemento, setFiltroElemento] = useState("todos");
  const [filtroArma, setFiltroArma] = useState("todos");
  const containerRef = useRef<HTMLDivElement>(null);

  const personajesFiltrados = personajes.filter(p => {
    const nombreCoincide = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const elementoCoincide = filtroElemento === "todos" || p.elemento.includes(filtroElemento);
    const armaCoincide = filtroArma === "todos" || p.arma.includes(filtroArma);
    return nombreCoincide && elementoCoincide && armaCoincide;
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
      <h1 className="personajes-title">Personajes de Genshin Impact</h1>
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
          <option value="Dendro">Dendro</option>
          <option value="Pyro">Pyro</option>
          <option value="Hydro">Hydro</option>
          <option value="Cryo">Cryo</option>
          <option value="Electro">Electro</option>
          <option value="Anemo">Anemo</option>
          <option value="Geo">Geo</option>
        </select>

        <select value={filtroArma} onChange={e => setFiltroArma(e.target.value)}>
          <option value="todos">Arma</option>
          <option value="espada">Espada</option>
          <option value="mandoble">Mandoble</option>
          <option value="lanza">Lanza</option>
          <option value="arco">Arco</option>
          <option value="catalizador">Catalizador</option>
        </select>
      </div>

      {/* Resultados */}
      {personajesFiltrados.length === 0 ? (
        <div className="no-result">
          <p>No se encontraron personajes con los filtros actuales 🧐</p>
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
