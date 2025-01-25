import { Link } from 'react-router-dom'
import Logo from '../assets/navbar/Logo.svg'
import Home from '../assets/navbar/Home.svg'
import Discount from '../assets/navbar/Discount.svg'
import Dashboard from '../assets/navbar/Dashboard.svg'
import Notification from '../assets/navbar/Notification.svg'
import Setting from '../assets/navbar/Setting.svg'

const Sidebar = (): JSX.Element => (
  <div className="bg-[#1F1D2B] w-[100px] h-screen bg- items-center text-white fixed top-0 left-0 flex flex-col p-6 shadow-lg">
    <nav className="w-16 flex flex-col justify-center items-center py-4 space-y-10">
      <img src={Logo} alt="img" />
      <Link
        to="/"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 hover:outline hover:outline-2 hover:outline-[#EA7C69]"
      >
        <img className="" src={Home} alt="img" />
      </Link>
      <Link
        to="/cardapio"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 hover:outline hover:outline-2 hover:outline-[#EA7C69]"
      >
        <img src={Discount} alt="img" />
      </Link>
      <Link
        to="/historico"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 hover:outline hover:outline-2 hover:outline-[#EA7C69]"
      >
        <img src={Dashboard} alt="Dashboard Icon" />
      </Link>
      <Link
        to="/notificacoes"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 hover:outline hover:outline-2 hover:outline-[#EA7C69]"
      >
        <img src={Notification} alt="img" />
      </Link>
      <Link
        to="/configuracoes"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 hover:outline hover:outline-2 hover:outline-[#EA7C69]"
      >
        <img src={Setting} alt="img" />
      </Link>
    </nav>
  </div>
)

export default Sidebar
