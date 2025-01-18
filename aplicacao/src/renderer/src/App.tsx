import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Pedidos from "./pages/Pedidos";
import PedidoForm from "./pages/TesteBancodeDados";
import Formulario from "./pages/Formulario"; // Importando a nova página

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedido" element={<PedidoForm />} />
          <Route path="/formulario" element={<Formulario />} /> {/* Nova rota */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

