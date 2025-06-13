import '../css/home.css';

export function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a WikiRail</h1>
      <p className="home-paragraph">
        WikiRail es un sitio web dedicado a brindar información completa y detallada sobre personajes, artefactos y
        mecánicas de juegos interactivos, con un enfoque especial en títulos populares como Genshin Impact y Honkai Star Rail.
      </p>
      <p className="home-paragraph">
        Nuestra plataforma está construida con React y Vite, siguiendo el patrón de arquitectura MVC para mantener un
        código limpio y organizado. Aquí puedes explorar perfiles de personajes, aprender sobre estrategias, y mucho más.
      </p>
      <p className="home-paragraph">
        ¡Explora, aprende y disfruta de la comunidad WikiRail!
      </p>
    </div>
  );
}
