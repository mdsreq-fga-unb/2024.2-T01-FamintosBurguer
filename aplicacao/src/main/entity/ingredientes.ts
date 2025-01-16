import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IngredientesAlimento } from './ingredientesalimento'

@Entity('ingredientes')
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @OneToMany(() => IngredientesAlimento, (ingredientesalimento) => ingredientesalimento.ingrediente)
  ingredientesalimento: IngredientesAlimento[]; // Relacionamento com Postagens
}
