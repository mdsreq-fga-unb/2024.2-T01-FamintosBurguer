/* eslint-disable prettier/prettier */
import { db } from '../database/database'

// Exponha funções para interagir com o banco
interface Pedido {
    id: number
    name: string
    email: string
}

export async function getPedido(): Promise<Pedido[]> {
    return db.prepare('SELECT * FROM Pedido').all()
}
  
export async function addPedido(name: string, email: string): Promise<void> {
    return db.prepare('INSERT INTO Pedido (name, email) VALUES (?, ?)').run(name, email)
}