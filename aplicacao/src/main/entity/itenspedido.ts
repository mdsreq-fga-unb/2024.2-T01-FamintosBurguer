import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Pedido } from './pedido'
import { Alimento } from './alimentos'

@Entity('itenspedido')
export class ItensPedido {
  @PrimaryGeneratedColumn()
  id: number

  @Column('integer')
  quantidade: number

  @Column('boolean')
  custom: boolean

  @Column('text')
  observacao: string

  @ManyToOne(() => Pedido, (pedido) => pedido.itenspedido, { onDelete: 'CASCADE' })
  pedido: Pedido; // Chave estrangeira para a tabela `usuarios`

  @ManyToOne(() => Alimento, (alimento) => alimento.ingredientesalimento, { onDelete: 'CASCADE' })
  alimento: Alimento; // Chave estrangeira para a tabela `usuarios`
}