import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarDireita from '../components/SideBarDireita';

const Cardapio = (): JSX.Element => {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<{
    id: number;
    name: string;
    price: string;
    quantity: number;
    observation: string;
  }[]>([]);

  const [pedidoId, setPedidoId] = useState<string>(''); // Estado para armazenar o ID do pedido

  // Função para gerar um ID único para o pedido com até 5 dígitos (entre 0 e 99999)
  const generatePedidoId = (): string => {
    return Math.floor(Math.random() * 100000).toString();
  };

  // Gera o ID do pedido ao montar o componente
  useEffect(() => {
    setPedidoId(generatePedidoId());
  }, []);

  const handleAddItem = (): void => {
    navigate('/formulario');
  };

  const handleCardClick = (item: { id: number; name: string; price: string }): void => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, observation: '' }];
      }
    });
  };

  const handleIncreaseQuantity = (id: number): void => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number): void => {
    setSelectedItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number): void => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleObservationChange = (id: number, observation: string): void => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, observation } : item
      )
    );
  };

  // Estado para controlar a seção ativa
  const [activeSection, setActiveSection] = useState('lanches');

  // Função para alterar a seção ativa
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
/*
  // Função para carregar os alimentos do banco
  const loadMenuItems = async () => {
    try {
      const alimentos = await window.api.fetchAlimentos(); // Chama o método do preload
      setMenuItems(alimentos);
    } catch (error) {
      console.error('Erro ao carregar itens do cardápio:', error);
    }
  };

  // Carrega os itens ao montar o componente
  useEffect(() => {
    loadMenuItems();
  }, []);

  // Função para filtrar itens por categoria (simulada para o exemplo)
  const renderItems = () => {
    return menuItems.filter((item) => item.categoria === activeSection); // Adapte conforme suas categorias
  };
  */
  // Itens do cardápio
  const lanches = [
    { id: 1, name: 'X-Burguer', price: 'R$ 13,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
    { id: 2, name: 'X-Salada', price: 'R$ 15,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
    { id: 3, name: 'X-Egg', price: 'R$ 17,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
    { id: 4, name: 'X-Bacon', price: 'R$ 18,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
    { id: 5, name: 'X-Tudo', price: 'R$ 20,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
    { id: 6, name: 'X-Famintos', price: 'R$ 28,00', description: 'Hambúrguer, queijo, presunto e batata palha' },
  ];

  const bebidas = [
    { id: 1, name: 'Coca-Cola', price: 'R$ 5,00', description: 'Refrigerante clássico' },
    { id: 2, name: 'Guaraná Antártica', price: 'R$ 5,00', description: 'Refrigerante tradicional' },
    { id: 3, name: 'Suco de Laranja', price: 'R$ 6,00', description: 'Suco natural de laranja' },
  ];

  const combos = [
    { id: 1, name: 'Combo X-Burguer + Refrigerante', price: 'R$ 18,00', description: 'Combo com X-Burguer e refrigerante' },
    { id: 2, name: 'Combo X-Tudo + Suco', price: 'R$ 22,00', description: 'Combo com X-Tudo e suco' },
  ];

  const especiais = [
    { id: 1, name: 'X-Famintos Especial', price: 'R$ 30,00', description: 'Hambúrguer especial com molho secreto' },
    { id: 2, name: 'X-Bacon Deluxe', price: 'R$ 25,00', description: 'Hambúrguer com bacon e cheddar' },
  ];

  // Função para renderizar os itens da seção ativa
  const renderItems = () => {
    switch (activeSection) {
      case 'lanches':
        return lanches;
      case 'bebidas':
        return bebidas;
      case 'combos':
        return combos;
      case 'especiais':
        return especiais;
      default:
        return lanches;
    }
  };

  return (
    <div className="flex w-full h-full pt-16">
      {/* Ajuste para 2/3 da tela para o cardápio */}
      <div className="w-2/3">
        {/* Ajuste do header fixo para não invadir a sidebar de 1/3 */}
        <div className="fixed top-0 left-64 w-[calc(67%-16rem)] shadow-md flex justify-between items-center px-6 py-4 z-10">
          <h1 className="text-3xl font-bold text-white">Cardápio</h1>
          <button
            onClick={handleAddItem}
            className="flex items-center justify-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition-all"
          >
            <span className="text-xl">+</span>
            <span>Adicionar</span>
          </button>
        </div>

        <div
          className="mt-24 px-6 overflow-y-auto pb-20"
          style={{ height: `calc(100vh - 6rem - 1rem)` }}
        >
          <div className="flex justify-around mb-6">
            <button
              className="text-white font-semibold py-2 px-4 rounded hover:text-[#ea7c69]"
              onClick={() => handleSectionChange('lanches')}
            >
              Lanches
            </button>
            <button
              className="text-white font-semibold py-2 px-4 rounded hover:text-[#ea7c69]"
              onClick={() => handleSectionChange('bebidas')}
            >
              Bebidas
            </button>
            <button
              className="text-white font-semibold py-2 px-4 rounded hover:text-[#ea7c69]"
              onClick={() => handleSectionChange('combos')}
            >
              Combos
            </button>
            <button
              className="text-white font-semibold py-2 px-4 rounded hover:text-[#ea7c69]"
              onClick={() => handleSectionChange('especiais')}
            >
              Especiais
            </button>
          </div>

          <div className="mt-2 mb-6">
            <hr className="border-t-2 border-[#393C49]" />
          </div>

          <h2 className="text-800 font-bold text-white mb-6">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderItems().map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-purple-700 font-semibold mt-4">
                  R$ {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SideBarDireita
        selectedItems={selectedItems}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleRemoveItem={handleRemoveItem}
        handleObservationChange={handleObservationChange}
        pedidoId={pedidoId} // Passando o ID do pedido como prop
      />
    </div>
  );
};

export default Cardapio;
