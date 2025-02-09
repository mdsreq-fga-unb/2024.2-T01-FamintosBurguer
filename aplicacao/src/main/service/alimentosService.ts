import { Repository } from 'typeorm'
import { AppDataSource } from '../config/database'
import { Alimento } from '../entity/alimentos'

export default class AlimentosService {
  private repository: Repository<Alimento>

  constructor() {
    this.repository = AppDataSource.getRepository(Alimento)
  }

  async getAlimentos(): Promise<Alimento[]> {
    return this.repository.find()
  }

  async postAlimentos(alimento: Alimento): Promise<Alimento> {
    return this.repository.save(alimento)
  }
}
