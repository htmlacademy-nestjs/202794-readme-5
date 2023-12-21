import { Model } from 'mongoose';
import { IEntity } from './entity.interface';
import { IRepository } from './repository.interface';

export abstract class MongoRepository<T extends IEntity> implements IRepository<T> {
  protected readonly model: Model<T>;

  public async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  public async findOne(id: T['id']): Promise<T> {
    return this.model.findOne({ _id: id });
  }

  public async create(data: T): Promise<T> {
    const entity = new this.model(data);
    return entity.save();
  }

  public async update(id: T['id'], data: Partial<T>): Promise<T> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async remove(id: T['id']): Promise<T> {
    const entity = await this.findOne(id);
    if (entity) await this.model.deleteOne({ _id: id });
    return entity;
  }

  public async contains(id: T['id']): Promise<boolean> {
    return Boolean(await this.findOne(id));
  }
}
