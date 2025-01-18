import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gradient-to-b from-purple-600 to-purple-800 text-white fixed top-0 left-0 flex flex-col p-6 shadow-lg">
    <h1 className="text-2xl font-bold mb-10 text-center tracking-wide break-words">
      FamintosBurguer 🍔
    </h1>
    <nav className="flex flex-col gap-6">
      <Link
        to="/"
        className="flex items-center gap-3 text-lg font-medium hover:bg-purple-700 p-3 rounded transition-all duration-300 ease-in-out hover:scale-105"
      >
        🏠 Home
      </Link>
      <Link
        to="/cardapio"
        className="flex items-center gap-3 text-lg font-medium hover:bg-purple-700 p-3 rounded transition-all duration-300 ease-in-out hover:scale-105"
      >
        📋 Cardápio
      </Link>
      <Link
        to="/pedidos"
        className="flex items-center gap-3 text-lg font-medium hover:bg-purple-700 p-3 rounded transition-all duration-300 ease-in-out hover:scale-105"
      >
        📦 Pedidos
      </Link>
      <Link
        to="/pedido"
        className="flex items-center gap-3 text-lg font-medium hover:bg-purple-700 p-3 rounded transition-all duration-300 ease-in-out hover:scale-105"
      >
        ⚙️ Teste Banco de Dados
      </Link>
    </nav>
    <footer className="mt-auto text-sm text-center text-gray-300">
      © 2025 FamintosBurguer. All rights reserved.
    </footer>
  </div>
);

export default Sidebar;
