import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IngredientesAlimento } from './ingredientesalimento'
import { ItensPedido } from './itenspedido'
@Entity('alimento')
export class Alimento {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('text')
  tipo: string

  @Column('integer')
  valor: number

  @Column('text', { nullable: true })
  observacao: string

  @OneToMany(() => IngredientesAlimento, (ingredientesalimento) => ingredientesalimento.alimento)
  ingredientesalimento: IngredientesAlimento[]

  @OneToMany(() => ItensPedido, (itenspedido) => itenspedido.alimento)
  itenspedido: ItensPedido[]
}
