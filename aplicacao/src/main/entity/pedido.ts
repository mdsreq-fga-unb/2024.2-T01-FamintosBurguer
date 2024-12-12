import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  cliente: string

  @Column('text')
  item: string

  @Column('integer')
  quantidade: number

  @Column('text')
  observacoes: string
}
