import { useState } from 'react';
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

  const items = [
    { id: 1, name: 'Hambúrguer Clássico', description: 'Um hambúrguer suculento com queijo e alface.', price: '20.00' },
    { id: 2, name: 'Batata Frita', description: 'Porção crocante de batata frita.', price: '10.00' },
    { id: 3, name: 'Milkshake de Chocolate', description: 'Delicioso milkshake cremoso.', price: '15.00' },
    { id: 4, name: 'Salada Caesar', description: 'Uma salada leve e refrescante.', price: '12.00' },
    { id: 5, name: 'Suco de Laranja', description: 'Suco natural de laranja.', price: '8.00' },
    { id: 6, name: 'Frango Grelhado', description: 'Filé de frango grelhado com molho especial.', price: '25.00' },
  ];

  return (
    <div className="flex w-full h-full pt-16">
      <div className="w-3/4">
        <div className="fixed top-0 left-64 w-[calc(75%-16rem)] shadow-md flex justify-between items-center px-6 py-4 z-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-purple-700 font-semibold mt-4">R$ {item.price}</p>
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
      />
    </div>
  );
};

export default Cardapio;