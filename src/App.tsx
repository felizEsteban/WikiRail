import { Routes, Route } from 'react-router-dom';
import { Layout } from './views/layout/layout';
import { Home } from './views/pages/home';
import PersonajeH from './views/pages/personajeHSR';
import { CharacterDetailH } from './components/HSR/characterDetail';
import PersonajeG from './views/pages/personajeGi';
import { CharacterDetailG } from './components/GI/characterDetail';
import NotFound from './views/pages/NotFound';
import './App.css';
export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajeHSR" element={<PersonajeH />} />
        <Route path="/personajeHSR/:id" element={<CharacterDetailH />} />
        <Route path="/personajeGI" element={<PersonajeG />} />
        <Route path="/personajeGI/:id" element={<CharacterDetailG />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
