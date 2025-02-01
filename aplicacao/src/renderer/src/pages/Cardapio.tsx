import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarDireita from '../components/SideBarDireita';

// Tipo que representa seu alimento no banco (ajuste se necessário)
interface Alimento {
  id: number;
  nome: string;
  tipo: string;       // "Lanche", "Bebida", "Trio" ou "Adicional"
  valor: number;      // Ex: 1300 significa 13.00
  observacao: string; // Descrição
}

// Função para truncar a descrição
function truncateDescription(description: string, maxLength: number): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

// Faz o “mapeamento” de "Lanche" -> 'lanches', "Bebida" -> 'bebidas', etc.
function mapTipoToCategory(tipo: string): 'lanches' | 'bebidas' | 'trios' | 'adicionais' {
  switch (tipo.toLowerCase()) {
    case 'lanche':
      return 'lanches';
    case 'bebida':
      return 'bebidas';
    case 'trio':
      return 'trios';
    case 'adicional':
      return 'adicionais';
    default:
      return 'lanches'; // fallback
  }
}

const Cardapio = (): JSX.Element => {
  const navigate = useNavigate();

  // ============================
  // 1) ESTADO dos alimentos do banco
  // ============================
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);

  // ============================
  // 2) ESTADO para itens selecionados (carrinho)
  // ============================
  const [selectedItems, setSelectedItems] = useState<{
    id: number;
    name: string;
    price: string;
    quantity: number;
    observation: string;
  }[]>([]);

  // ============================
  // 3) Pedido e categorias
  // ============================
  const [pedidoId, setPedidoId] = useState<string>('');
  const [orderStatus] = useState<string>('Pendente');
  const [cliente, setCliente] = useState<string>('');
  const [activeSection, setActiveSection] =
    useState<'lanches' | 'bebidas' | 'trios' | 'adicionais'>('lanches');

  // ============================
  // 4) EFEITOS
  // ============================
  useEffect(() => {
    // Gera um ID para o pedido na montagem
    setPedidoId(generatePedidoId());

    // Busca alimentos do banco
    window.api
      .getAlimentos()
      .then((data) => {
        console.log('Dados do banco:', data);
        setAlimentos(data); // Armazena no estado
      })
      .catch((error) => {
        console.error('Erro ao buscar alimentos:', error);
      });
  }, []);

  // ============================
  // 5) FUNÇÕES
  // ============================
  // Gera ID único de até 5 dígitos
  const generatePedidoId = (): string => {
    return Math.floor(Math.random() * 100000).toString();
  };

  // Troca de categoria (ex: lanches, bebidas, trios, adicionais)
  const handleSectionChange = (
    section: 'lanches' | 'bebidas' | 'trios' | 'adicionais'
  ): void => {
    setActiveSection(section);
  };

  // Ir para o formulário de adicionar item
  const handleAddItem = (): void => {
    navigate('/formulario');
  };

  // Adicionar ou incrementar item no carrinho
  const handleCardClick = (item: { id: number; name: string; price: string }) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Se já existe no carrinho, incrementa a quantidade
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Se não existe, adiciona com quantity=1
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
    // Poderia enviar para a API, etc.
  };

  // ============================
  // 6) FILTRO: Converte tipo -> category e filtra
  // ============================
  const filteredItems = alimentos
    .filter((item) => {
      // Mapeia ex: "Lanche" -> 'lanches'
      const category = mapTipoToCategory(item.tipo);
      return category === activeSection;
    })
    .map((item) => {
      // Precisamos converter esse `item` do banco 
      // para o formato usado no "cart" (name, price em string, etc.)
      return {
        // Tudo que for preciso no card:
        id: item.id,
        name: item.nome,
        // Convertendo item.valor (ex: 1300) em "13.00"
        price: (item.valor / 100).toFixed(2),
        description: item.observacao,
      };
    });

  // ============================
  // 7) RENDER
  // ============================
  return (
    <div className="flex w-screen h-screen bg-[#252836] text-white overflow-hidden">
      {/* SIDEBAR ESQUERDA */}
      <div className="w-[100px] bg-[#1F1D2B] h-full">
        {/* Conteúdo da sua sidebar esquerda, se existir */}
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

        {/* GRID DE CARDS */}
        <div className="pr-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                // Ao clicar, passamos o ID e PRICE em string para o carrinho
                onClick={() => handleCardClick({
                  id: item.id,
                  name: item.name,
                  price: item.price
                })}
                className="cursor-pointer bg-[#1F1D2B] p-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-center text-base font-normal mt-2">
                  {item.name}
                </h3>
                
                {/* Preço (ex.: R$ 13.00) */}
                <p className="text-center font-semibold mt-2">
                  R$ {item.price}
                </p>

                {/* Descrição truncada (observacao do DB) */}
                <p className="text-center text-gray-400 mt-2">
                  {truncateDescription(item.description, 50)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botão "Adicionar" fixado */}
        <div className="fixed bottom-6 left-[160px] z-10">
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
