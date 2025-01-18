import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PedidoForm from "./pages/TesteBancodeDados";

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      {/* Adicionando margem para evitar sobreposição da Sidebar */}
      <div className="flex-1 ml-64 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pedido" element={<PedidoForm />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
