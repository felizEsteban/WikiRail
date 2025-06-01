import { Routes, Route } from 'react-router-dom';
import { Layout } from './views/layout/layout';
import { Home } from './views/pages/home';
import { Personaje } from './views/pages/personaje';


export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje" element={<Personaje />} />
      </Routes>
    </Layout>
  );
}
