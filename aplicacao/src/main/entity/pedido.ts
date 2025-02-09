import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { ItensPedido } from './itenspedido'

@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  cliente: string

  @Column('integer')
  total: number

  @Column('date')
  data: Date

  @Column('text')
  pagamento: string

  @Column('text')
  status: string

  @OneToMany(() => ItensPedido, (itenspedido) => itenspedido.pedido)
  itenspedido: ItensPedido[] // Relacionamento com a tabela `itenspedido`
}
