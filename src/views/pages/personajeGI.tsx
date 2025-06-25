import { useState, useEffect, useRef } from 'react';
import { personajes } from "../../models/GI/personajeData";
import { CharacterCard } from "../../components/GI/characterCard";
import '../css/personajePage.css';

const PersonajePage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<number>(12);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.offsetHeight - 500
      ) {
        setVisibleCharacters(prev => Math.min(prev + 8, personajes.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="personajes-container">
      <h1 className="personajes-title">Personajes de Genshin Impact</h1>
      <p className="personajes-subtitle">Explora todos los personajes jugables de Teyvat</p>
      
      <div className="personaje-grid" ref={containerRef}>
        {personajes.slice(0, visibleCharacters).map(p => (
          <CharacterCard key={p.id} personaje={p} />
        ))}
      </div>
      
      {visibleCharacters < personajes.length && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Cargando más personajes...</p>
        </div>
      )}
    </div>
  );
};

export default PersonajePage;
