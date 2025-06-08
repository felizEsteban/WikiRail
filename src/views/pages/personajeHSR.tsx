import "../css/personaje.css";
import { personajes } from "../../models/HSR/personajeData";
import { CharacterCard } from "../../components/HSR/characterCard";

const PersonajePage = () => {
  return (
    <div className="personaje-grid">
      {personajes.map(p => (
        <CharacterCard key={p.id} personaje={p} />
      ))}
    </div>
  );
};

export default PersonajePage;
