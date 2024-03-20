import { QueryTypes, Model, Sequelize } from 'sequelize';

export interface IBaseRepository<T extends Model> {
  findAll(predicate): Promise<T[]>;
  findAndCountAll(predicate): Promise<T[]>;
  findOne(predicate): Promise<T>;
  count(predicate): Promise<number>;
  createUnique(data): Promise<T>;
  create(data): Promise<T>;
  update<M>(
    data: Omit<M, 'id'>,
    predicate: { [key: string]: any },
  ): Promise<any>;
  findRaw(selectQuery: string): Promise<any>;
  delete(predicate): Promise<T>;
}

export class BaseRepository<T extends Model> implements IBaseRepository<T> {
  protected readonly sequelize: Sequelize;

  constructor(private Model) {
    this.sequelize = Model.sequelize;
  }

  public async findAll(predicate): Promise<T[]> {
    return await this.Model.findAll(predicate);
  }

  public async findAndCountAll(predicate): Promise<T[]> {
    return await this.Model.findAndCountAll(predicate);
  }

  public async findOne(predicate): Promise<T> {
    return await this.Model.findOne(predicate);
  }

  count(predicate): Promise<number> {
    return this.Model.count(predicate);
  }

  public async createUnique(data): Promise<T> {
    delete data.id;

    return await this.Model.findOrCreate({ where: data });
  }

  public async create(data): Promise<any> {
    delete data.id;
    return await this.Model.create(data);
  }

  public async update<M>(
    data: Omit<M, 'id'>,
    predicate: { [key: string]: any },
  ): Promise<any> {
    return await this.Model.update(data, predicate);
  }

  public async delete(predicate): Promise<any> {
    const item = await this.findOne(predicate);
    if(!item){
      return {
        status: 404,
        message: "Esta postagem não existe"
      }
    } 
    return item.destroy();
  }

  public async findRaw(selectQuery: string): Promise<any> {
    return await this.sequelize.query(selectQuery, { type: QueryTypes.SELECT });
  }
}
