import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Carrossel } from './components/Carrossel';
import Landing from './components/Landing';
import Login from './components/Login';
import { Cadastro } from './components/Cadastro';
import RecuperarSenha from './components/RecuperarSenha';
import Footer from './components/Footer';
import Categorias from './components/Categorias';
import Ajuda from './components/Ajuda';
import TrabalheConosco from './components/TrabalheConosco';
import Sobre from './components/Sobre';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`flex flex-col cursor-crosshair h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-orange-200'}`}>
        {/* Header fixo */}
        <div className="flex-shrink-0">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Conteúdo com rolagem */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route index element={<Carrossel />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recuperar-senha" element={<RecuperarSenha />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          </Routes>
        </main>

        {/* Footer fixo */}
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
