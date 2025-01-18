import React, { useState } from 'react'

function PedidoForm() {
  const [cliente, setCliente] = useState('')
  const [item, setItem] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [observacoes, setObservacoes] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const pedidoData = {
      cliente,
      item,
      quantidade,
      observacoes
    }

    try {
      const novoPedido = await window.electronAPI.cadastrarPedido(pedidoData)
      alert(`Pedido cadastrado com sucesso! ID: ${novoPedido.id}`)
    } catch (error) {
      console.error('Erro ao cadastrar pedido:', error)
      console.log(error)
      alert('Erro ao cadastrar pedido.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cliente:
        <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} required />
      </label>
      <label>
        Item:
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} required />
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Observações:
        <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
      </label>
      <button type="submit">Cadastrar Pedido</button>
    </form>
  )
}

export default PedidoForm