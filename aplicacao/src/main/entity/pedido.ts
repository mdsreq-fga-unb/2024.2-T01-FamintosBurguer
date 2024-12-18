import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm'
import { ItensPedido } from './itenspedido'
import { IngredientesAlimento } from './ingredientesalimento'
@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  cliente: string

  @Column('integer')
  desconto: number

  @Column('integer')
  total: number

  @Column('integer')
  subtotal: number

  @Column('date')
  data: Date

  @Column('text')
  pagamento: string

  @Column('text')
  status: string

  @OneToMany(() => ItensPedido, (itenspedido) => itenspedido.pedido)
  itenspedido: ItensPedido[]; // Relacionamento com Postagens

  @OneToOne(() => IngredientesAlimento, (ingredientesalimento) => ingredientesalimento.pedido)
  ingredientesalimento: IngredientesAlimento; // Relacionamento com Postagens
}
