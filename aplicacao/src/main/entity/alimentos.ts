import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IngredientesAlimento } from './ingredientesalimento'
import { ItensPedido } from './itenspedido'
@Entity('alimento')
export class Alimento {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('integer')
  valor: number

  @Column('text')
  observacao: string

  @OneToMany(() => IngredientesAlimento, (ingredientesalimento) => ingredientesalimento.alimento)
  ingredientesalimento: IngredientesAlimento[]; // Relacionamento com Postagens

  @OneToMany(() => ItensPedido, (itenspedido) => itenspedido.alimento)
  itenspedido: ItensPedido[]; // Relacionamento com Postagens
}
