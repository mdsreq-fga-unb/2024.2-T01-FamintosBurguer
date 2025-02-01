import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarDireita from '../components/SideBarDireita';

// Função para truncar a descrição
function truncateDescription(description: string, maxLength: number): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

const Cardapio = (): JSX.Element => {
  const navigate = useNavigate();

  // Estado para itens selecionados (carrinho)
  const [selectedItems, setSelectedItems] = useState<{
    id: number;
    name: string;
    price: string;
    quantity: number;
    observation: string;
  }[]>([]);

  // Estado para pedido
  const [pedidoId, setPedidoId] = useState<string>('');
  const [orderStatus] = useState<string>('Pendente');
  const [cliente, setCliente] = useState<string>('');

  // Estado para controlar qual categoria está ativa
  const [activeSection, setActiveSection] = useState<'lanches' | 'bebidas' | 'trios' | 'adicionais'>('lanches');

  useEffect(() => {
    setPedidoId(generatePedidoId());
  }, []);

  // Gera ID único de até 5 dígitos
  const generatePedidoId = (): string => {
    return Math.floor(Math.random() * 100000).toString();
  };

  // Troca de categoria
  const handleSectionChange = (
    section: 'lanches' | 'bebidas' | 'trios' | 'adicionais'
  ): void => {
    setActiveSection(section);
  };

  // Navega para o formulário de adicionar novo item
  const handleAddItem = (): void => {
    navigate('/formulario');
  };

  // Lógica do carrinho (adicionar, remover, etc.)
  const handleCardClick = (item: { id: number; name: string; price: string }) => {
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

  // Finaliza o pedido
  const handleFinalizeOrder = (): void => {
    const dataAtual = new Date().toISOString().slice(0, 10);
    const totalValue = selectedItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );

    const pedido = {
      id: pedidoId,
      status: orderStatus,
      cliente,
      data: dataAtual,
      items: selectedItems,
      total: totalValue.toFixed(2),
    };

    console.log('Pedido finalizado:', pedido);
    // Pode enviar para API ou fazer outra ação
  };

  // Items do cardápio, cada um com "category"
  const items = [
    // Lanches
    {
      id: 1,
      name: 'Hambúrguer Clássico',
      description: 'Um hambúrguer suculento com queijo, alface e molho especial da casa.',
      price: '20.00',
      category: 'lanches',
    },
    {
      id: 2,
      name: 'Batata Frita',
      description: 'Porção crocante de batata frita com tempero exclusivo.',
      price: '10.00',
      category: 'lanches',
    },
    // Bebidas
    {
      id: 3,
      name: 'Milkshake de Chocolate',
      description: 'Milkshake cremoso de chocolate feito com sorvete artesanal.',
      price: '15.00',
      category: 'bebidas',
    },
    {
      id: 4,
      name: 'Suco de Laranja',
      description: 'Suco natural de laranja fresquinho, sem adição de açúcar.',
      price: '8.00',
      category: 'bebidas',
    },
    // Trios
    {
      id: 5,
      name: 'Trio X-Burguer',
      description: 'X-Burguer + Batata + Bebida. Combo especial para matar a fome!',
      price: '27.00',
      category: 'trios',
    },
    {
      id: 6,
      name: 'Trio Frango',
      description: 'Frango Grelhado + Batata + Bebida. Mais leve e saudável.',
      price: '32.00',
      category: 'trios',
    },
    // Adicionais
    {
      id: 7,
      name: 'Queijo Extra',
      description: 'Adicione queijo extra ao seu hambúrguer favorito!',
      price: '3.00',
      category: 'adicionais',
    },
    {
      id: 8,
      name: 'Bacon Extra',
      description: 'Fatias extras de bacon crocante para tornar seu lanche irresistível.',
      price: '4.00',
      category: 'adicionais',
    },
  ];

  // Filtra só os itens da categoria selecionada
  const filteredItems = items.filter((item) => item.category === activeSection);

  return (
    <div className="flex w-screen h-screen bg-[#252836] text-white overflow-hidden">
      {/* SIDEBAR ESQUERDA */}
      <div className="w-[100px] bg-[#1F1D2B] h-full">
        {/* Conteúdo da sua sidebar esquerda */}
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 p-6 overflow-auto relative">
        <h1 className="text-3xl font-bold mb-4">Famintos Burger</h1>
        <hr className="border-t-2 border-[#393C49] mb-6" />

        {/* Botões de Categoria */}
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => handleSectionChange('lanches')}
            className={`py-2 px-4 rounded font-semibold transition-all ${
              activeSection === 'lanches'
                ? 'bg-[#ea7c69] text-white'
                : 'bg-transparent text-white hover:text-[#ea7c69]'
            }`}
          >
            Lanches
          </button>
          <button
            onClick={() => handleSectionChange('bebidas')}
            className={`py-2 px-4 rounded font-semibold transition-all ${
              activeSection === 'bebidas'
                ? 'bg-[#ea7c69] text-white'
                : 'bg-transparent text-white hover:text-[#ea7c69]'
            }`}
          >
            Bebidas
          </button>
          <button
            onClick={() => handleSectionChange('trios')}
            className={`py-2 px-4 rounded font-semibold transition-all ${
              activeSection === 'trios'
                ? 'bg-[#ea7c69] text-white'
                : 'bg-transparent text-white hover:text-[#ea7c69]'
            }`}
          >
            Trios
          </button>
          <button
            onClick={() => handleSectionChange('adicionais')}
            className={`py-2 px-4 rounded font-semibold transition-all ${
              activeSection === 'adicionais'
                ? 'bg-[#ea7c69] text-white'
                : 'bg-transparent text-white hover:text-[#ea7c69]'
            }`}
          >
            Adicionais
          </button>
        </div>

        {/* Título da seção */}
        <h2 className="text-2xl font-bold mb-4 capitalize">{activeSection}</h2>

        {/* Grid de cards */}
        <div className="pr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="cursor-pointer bg-[#1F1D2B] p-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-center text-base font-normal mt-2">
                  {item.name}
                </h3>

                {/* Agora o preço vem antes da descrição */}
                <p className="text-center font-semibold mt-2">
                  R$ {item.price}
                </p>

                {/* Descrição truncada */}
                <p className="text-center text-gray-400 mt-2">
                  {truncateDescription(item.description, 50)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botão "Adicionar" fixado */}
        <div className="fixed bottom-6 left-[120px] z-10">
          <button
            onClick={handleAddItem}
            className="flex items-center gap-3 bg-[#ea7c69] text-white px-4 py-2 rounded-lg hover:bg-[#e55337] transition-all"
          >
            <span className="text-xl">+</span>
            <span>Adicionar</span>
          </button>
        </div>
      </div>

      {/* SIDEBAR DIREITA (carrinho) */}
      <div className="w-1/3 bg-[#1F1D2B] h-full overflow-auto">
        <SideBarDireita
          selectedItems={selectedItems}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveItem={handleRemoveItem}
          handleObservationChange={handleObservationChange}
          pedidoId={pedidoId}
          onFinalizeOrder={handleFinalizeOrder}
          cliente={cliente}
          onClienteChange={setCliente}
        />
      </div>
    </div>
  );
};

export default Cardapio;
