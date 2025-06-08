import { Routes, Route } from 'react-router-dom';
import { Layout } from './views/layout/layout';
import { Home } from './views/pages/home';
import Personaje  from './views/pages/personajeHSR';
import { CharacterDetail } from './components/HSR/characterDetail';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajeHSR" element={<Personaje />} />
        <Route path="/personajeHSR/:id" element={<CharacterDetail />} />
      </Routes>
    </Layout>
  );
}
