import React from 'react';

interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
  observation: string;
}

interface SideBarDireitaProps {
  selectedItems: Item[];
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveItem: (id: number) => void;
  handleObservationChange: (id: number, observation: string) => void;
}

const SideBarDireita: React.FC<SideBarDireitaProps> = ({
  selectedItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
  handleObservationChange,
}) => {
  return (
    <div className="w-1/4 bg-[#1F1D2B] text-white p-6 fixed right-0 top-0 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Pedido</h2>
      <div className="grid grid-cols-4 gap-4 font-semibold mb-4">
        <span>Itens</span>
        <span className="text-center">Qtd</span>
        <span className="text-center">Valor</span>
        <span className="text-center">Ação</span>
      </div>
      {selectedItems.length === 0 ? (
        <p className="text-gray-400 text-center mt-4">Nenhum item selecionado.</p>
      ) : (
        <ul className="space-y-4">
          {selectedItems.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-4 gap-4 items-center border-b border-gray-600 pb-2"
            >
              <span>{item.name}</span>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-gray-700 px-2 rounded text-white hover:bg-gray-600 transition"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="bg-gray-700 px-2 rounded text-white hover:bg-gray-600 transition"
                >
                  +
                </button>
              </div>
              <span className="text-center">
                R$ {(parseFloat(item.price) * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 transition flex justify-center"
              >
                ✖
              </button>
              <textarea
                className="col-span-4 bg-gray-800 text-white rounded-lg p-2 mt-2 resize-none"
                rows={2}
                placeholder="Adicione observações (ex: retirar a alface)"
                value={item.observation}
                onChange={(e) =>
                  handleObservationChange(item.id, e.target.value)
                }
              />
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right font-bold">
        Total: R${' '}
        {selectedItems
          .reduce(
            (total, item) =>
              total + parseFloat(item.price) * item.quantity,
            0
          )
          .toFixed(2)}
      </div>
      <button className="w-full mt-6 bg-[#EA7C69] py-2 rounded-lg text-white hover:bg-[#ee8774] transition-all">
        Finalizar Pedido
      </button>
    </div>
  );
};

export default SideBarDireita;