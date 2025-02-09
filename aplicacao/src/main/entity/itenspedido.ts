import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Pedido } from './pedido'

@Entity('itenspedido')
export class ItensPedido {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string

  @Column('decimal')
  preco: number

  @Column('integer')
  quantidade: number

  @Column('text')
  observacao: string

  @ManyToOne(() => Pedido, (pedido) => pedido.itenspedido, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido
}
