import React from "react";

const Cardapio = () => (
  <div className="w-full h-full pt-16 pl-64">
    {/* Header fixo no topo */}
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] shadow-md flex justify-between items-center px-6 py-4 z-10">
      <h1 className="text-3xl font-bold text-white">Cardápio</h1>
      <button className="flex items-center justify-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition-all">
        <span className="text-xl">+</span>
        <span>Adicionar</span>
      </button>
    </div>
    {/* Conteúdo do Cardápio */}
    <div className="mt-24">
      <p className="text-gray-600">Aqui você pode adicionar itens ao cardápio.</p>
    </div>
  </div>
);

export default Cardapio;
