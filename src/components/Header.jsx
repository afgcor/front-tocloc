import React from 'react';
import { CalendarHeart, House, ListPlus, Question, ReadCvLogo, SignIn, Users } from '@phosphor-icons/react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <div className={`headercontainer flex items-center justify-between px-4 py-4 bg-white dark:bg-gray-800 cursor-crosshair border-b-4 border-teal-600`}>
      <div className="flex items-center space-x-4">
        <Link to={"/"}>
          <img src="/image/logo_tocloc.png" alt="Logo" className="w-64" />
        </Link>
        <div className="links dark:text-orange-100">
          <div className="w-full max-w-wl bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 ml-2 flex items-center justify-between">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full bg-transparent border-none focus:outline-none placeholder:text-gray-400 text-gray-600 dark:text-white"
            />
            <Search size={24} className="text-gray-400 hover:text-gray-600 ease-in duration-150" />
          </div>
          <div className="ml-2 mt-4 flex flex-wrap items-center gap-4">
            <Link to={"/"} className="flex items-center gap-1 font-bold hover:text-orange-600 ease-in duration-150 cursor-pointer">
              <House size={18} />
              <span>Home</span>
            </Link>
            <span className="text-teal-400">✶</span>

            <Link to={"/sobre"} className="flex items-center gap-1 font-bold hover:text-orange-600 ease-in duration-150 cursor-pointer">
              <Users size={18} />
              <span>Sobre nós</span>
            </Link>
            <span className="text-teal-400">✶</span>

            <Link to={"/categorias"} className="flex items-center gap-1 font-bold hover:text-orange-600 ease-in duration-150 cursor-pointer">
              <ListPlus size={18} />
              <span>Categorias</span>
            </Link>
            <span className="text-teal-400">✶</span>

            <Link to={"/trabalhe-conosco"} className="flex items-center gap-1 font-bold hover:text-orange-600 ease-in duration-150 cursor-pointer">
              <ReadCvLogo size={18} />
              <span>Trabalhe conosco</span>
            </Link>
            <span className="text-teal-400">✶</span>

            <Link to={"/ajuda"} className="flex items-center gap-1 font-bold hover:text-orange-600 ease-in duration-150 cursor-pointer">
              <Question size={18} />
              <span>Ajuda</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Botão de "Entrar" */}
        <div className="flex items-center rounded-3xl bg-orange-500 hover:bg-orange-600 ease-in duration-150 px-4 py-2 cursor-pointer">
          <SignIn size={20} className="text-gray-100 mr-2" />
          <span className="text-gray-100 font-bold">
            <Link to={"/login"}>Entrar</Link>
          </span>
        </div>

        {/* Botão de toggle de modo noturno */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white"
        >
          {isDarkMode ? '🌙' : '🌞'}
        </button>
      </div>
    </div>
  );
}