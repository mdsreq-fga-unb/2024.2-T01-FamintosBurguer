import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Pedidos from './pages/Pedidos'
import PedidoForm from './pages/TesteBancodeDados'
import Formulario from './pages/Formulario'

const App = (): JSX.Element => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[100px] p-4">
        {' '}
        {/* Ajuste de largura */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedido" element={<PedidoForm />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </div>
  </Router>
)

export default App
