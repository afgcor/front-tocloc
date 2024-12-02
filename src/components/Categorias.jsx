import { Basketball, BeachBall, Racquet, SneakerMove, SoccerBall, Sparkle, TennisBall, Volleyball } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

export function Categorias() {
  const [quadras, setQuadras] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  useEffect(() => {
    const fetchQuadrasData = async () => {
      const response = await fetch('/data/quadras.json');
      const data = await response.json();
      setQuadras(data);
    };

    fetchQuadrasData();
  }, []);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const quadrasFiltradas = categoriaSelecionada
    ? quadras.find((item) => item.categoria === categoriaSelecionada)?.quadras || []
    : [];

  return (
    <div className="flex justify-center items-center flex-wrap space-x-6">
      <div className="w-full max-w-screen m-4 bg-white p-6 rounded-3xl dark:bg-gray-900 shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-2">Categorias</h1>
          <p className="text-gray-600 dark:text-orange-100">Consulte todos os espaços que disponibilizamos para a prática da sua atividade esportiva.</p>
        </div>
        <div className="flex space-x-2 py-4 flex-wrap justify-center">
          <div onClick={() => handleCategoriaClick('Futebol')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <SoccerBall size={36} />
            <span className="font-semibold text-lg text-center mt-2">Futebol</span>
          </div>
          <div onClick={() => handleCategoriaClick('Futsal')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <SneakerMove size={36} />
            <span className="font-semibold text-lg text-center mt-2">Futsal</span>
          </div>
          <div onClick={() => handleCategoriaClick('Vôlei')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <Volleyball size={36} />
            <span className="font-semibold text-lg text-center mt-2">Vôlei</span>
          </div>
          <div onClick={() => handleCategoriaClick('Vôlei de Praia')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <BeachBall size={36} />
            <span className="font-semibold text-lg text-center mt-1 leading-tight">Vôlei de Praia</span>
          </div>
          <div onClick={() => handleCategoriaClick('Basquete')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <Basketball size={36} />
            <span className="font-semibold text-lg text-center mt-2">Basquete</span>
          </div>
          <div onClick={() => handleCategoriaClick('Tênis')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <TennisBall size={36} />
            <span className="font-semibold text-lg text-center mt-2">Tênis</span>
          </div>
          <div onClick={() => handleCategoriaClick('Beach Tennis')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <Racquet size={36} />
            <span className="font-semibold text-lg text-center mt-1 leading-tight">Beach Tennis</span>
          </div>
          <div onClick={() => handleCategoriaClick('Outros esportes')} className="w-28 h-28 rounded-xl bg-teal-400 hover:bg-teal-300 flex flex-col justify-center items-center ease-in-out duration-150">
            <Sparkle size={36} />
            <span className="font-semibold text-lg text-center mt-1 leading-tight">Outros esportes</span>
          </div>
        </div>

        {categoriaSelecionada && quadrasFiltradas.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quadrasFiltradas.map((quadra, index) => (
              <div key={index} className="flex flex-col bg-teal-200 p-6 rounded-xl hover:bg-teal-300 ease-in-out duration-150">
                <img src={quadra.foto} alt={quadra.nome} className="w-full h-40 object-cover rounded-lg mb-4" />
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xl text-gray-800 dark:text-orange-100">{quadra.nome}</h3>
                    <p className="text-gray-600 dark:text-orange-100">{quadra.endereco}</p>
                    <p className="text-gray-600 dark:text-orange-100">{quadra.preco}</p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <button className="bg-orange-700 hover:bg-orange-600 duration-150 ease-in-out text-white font-semibold py-2 px-4 rounded-3xl">
                      Reservar
                    </button>
                    <button className="bg-orange-700 hover:bg-orange-600 duration-150 ease-in-out text-white font-semibold py-2 px-4 rounded-3xl">
                      Ver mais detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorias;
