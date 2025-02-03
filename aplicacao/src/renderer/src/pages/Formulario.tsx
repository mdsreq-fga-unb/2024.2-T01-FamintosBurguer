import React from 'react'
import { useNavigate } from 'react-router-dom'

const Formulario: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault() // Evita o comportamento padrão do formulário
    // Aqui você pode adicionar a lógica de cadastro (ex.: enviar os dados para o backend)
    console.log('Item cadastrado!')
    navigate('/cardapio') // Redireciona para a página de Cardápio
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[#252836] p-6 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Cadastrar Item do Cardápio
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="nome">
              Nome do Item
            </label>
            <input
              type="text"
              id="nome"
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ea7c69]"
              placeholder="Digite o nome do item"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              id="descricao"
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ea7c69]"
              placeholder="Digite a descrição do item"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="preco">
              Preço
            </label>
            <input
              type="number"
              id="preco"
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ea7c69]"
              placeholder="Digite o preço do item"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="preco">
              Categoria
            </label>
            <input
              type="text"
              id="categoria"
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ea7c69] "
              placeholder="Lanche, Bebida, Combo, Especial"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#ea7c69] text-white px-4 py-2 rounded-lg shadow hover:bg-[#e55337] transition-all w-full"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Formulario
