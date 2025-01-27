import { useNavigate } from 'react-router-dom'

const Cardapio = (): JSX.Element => {
  const navigate = useNavigate()

  const handleAddItem = (): void => {
    navigate('/formulario')
  }

  const items = [
    {
      id: 1,
      name: 'Hambúrguer Clássico',
      description: 'Um hambúrguer suculento com queijo e alface.',
      price: 'R$ 20,00'
    },
    {
      id: 2,
      name: 'Batata Frita',
      description: 'Porção crocante de batata frita.',
      price: 'R$ 10,00'
    },
    {
      id: 3,
      name: 'Milkshake de Chocolate',
      description: 'Delicioso milkshake cremoso.',
      price: 'R$ 15,00'
    },
    {
      id: 4,
      name: 'Salada Caesar',
      description: 'Uma salada leve e refrescante.',
      price: 'R$ 12,00'
    },
    { id: 5, name: 'Suco de Laranja', description: 'Suco natural de laranja.', price: 'R$ 8,00' },
    {
      id: 6,
      name: 'Frango Grelhado',
      description: 'Filé de frango grelhado com molho especial.',
      price: 'R$ 25,00'
    }
  ]

  return (
    <div className="w-full h-full pt-16">
      {/* Header fixo no topo */}
      <div className="fixed top-0 left-64 w-[calc(100%-16rem)] shadow-md flex justify-between items-center px-6 py-4 z-10">
        <h1 className="text-3xl font-bold text-white">Cardápio</h1>
        <button
          onClick={handleAddItem}
          className="flex items-center justify-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition-all"
        >
          <span className="text-xl">+</span>
          <span>Adicionar</span>
        </button>
      </div>

      {/* Conteúdo do Cardápio com barra de rolagem */}
      <div
        className="mt-24 px-6 overflow-y-auto pb-20"
        style={{ height: `calc(100vh - 6rem - 1rem)` }} // Ajustando para deixar espaço adicional
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-purple-700 font-semibold mt-4">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cardapio
