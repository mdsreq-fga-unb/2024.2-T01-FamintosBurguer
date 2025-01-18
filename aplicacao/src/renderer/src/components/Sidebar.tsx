import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 flex flex-col p-4">
    <h1 className="text-2xl font-bold mb-8">FamintosBurguer🍔</h1>
    <nav className="flex flex-col gap-4">
      <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
      <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">Profile</Link>
      <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
      <Link to="/pedido" className="hover:bg-gray-700 p-2 rounded">Pedidos</Link>
    </nav>
  </div>
);

export default Sidebar;
