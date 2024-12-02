import React from 'react';

export function Cadastro() {
  return (
    <div className="flex justify-center align-middle my-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg dark:bg-gray-900">
        <p className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-orange-100">Cadastro</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Nome de Usuário</label>
              <input type="text" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500" placeholder="Digite seu nome de usuário" />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Senha</label>
              <input type="password" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500"placeholder="Digite sua senha" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">CPF/CNPJ</label>
              <input type="text" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500" placeholder="Digite seu CPF ou CNPJ" />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Data de Aniversário</label>
              <input type="date" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500" placeholder="text-gray-100"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">E-mail</label>
              <input type="email" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500" placeholder="Digite seu e-mail" />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">
                Telefone
              </label>
              <input
                type="tel"
                className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-orange-100 focus:ring-orange-500"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 ease-in-out duration-150 w-1/3 mx-auto my-0 block">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
