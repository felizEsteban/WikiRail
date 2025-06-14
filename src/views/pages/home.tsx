import '../css/home.css';
import { personajes } from "../../models/HSR/personajeData";
import { CharacterCard } from "../../components/HSR/characterCard";
import { useState, useEffect } from 'react';

export function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Avanzar automáticamente el carrusel cada 3 segundos
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === personajes.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, personajes.length]);

  const goToPrev = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? personajes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === personajes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a <span className="brand-accent">WikiRail</span></h1>
      
      <div className="carousel-container">
        <div className="carousel">
          <button className="carousel-button prev" onClick={goToPrev} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-slide">
            <CharacterCard 
              key={personajes[currentIndex].id} 
              personaje={personajes[currentIndex]} 
            />
          </div>
          
          <button className="carousel-button next" onClick={goToNext} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="carousel-dots">
          {personajes.map((_, index: number) => (
            <button 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="home-content">
        <div className="content-card">
          <p className="home-paragraph">
            WikiRail es un sitio web dedicado a brindar información completa y detallada sobre personajes, artefactos y
            mecánicas de juegos interactivos, con un enfoque especial en títulos populares como Genshin Impact y Honkai Star Rail.
          </p>
        </div>
        <div className="content-card">
          <p className="home-paragraph">
            Nuestra plataforma está construida con React y Vite, siguiendo el patrón de arquitectura MVC para mantener un
            código limpio y organizado. Aquí puedes explorar perfiles de personajes, aprender sobre estrategias, y mucho más.
          </p>
        </div>
        <div className="content-card accent">
          <p className="home-paragraph">
            ¡Explora, aprende y disfruta de la comunidad WikiRail!
          </p>
        </div>
      </div>
    </div>
  );
}