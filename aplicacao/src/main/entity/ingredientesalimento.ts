import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Ingrediente } from './ingredientes'

@Entity('ingredientesalimento')
export class IngredientesAlimento {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('integer')
  quantidade: number

  @Column('integer')
  valor: number

  @Column('boolean')
  custom: boolean

  @Column('text')
  observacao: string

  @ManyToOne(() => Ingrediente, (ingrediente) => ingrediente.ingredientesalimento, {
    onDelete: 'CASCADE'
  })
  ingrediente: Ingrediente // Chave estrangeira para a tabela `usuarios`
}
