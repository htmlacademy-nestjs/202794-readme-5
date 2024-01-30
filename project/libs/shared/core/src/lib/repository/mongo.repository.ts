import { Model } from 'mongoose';
import { IPagination, ClassConstructor } from '@project/libs/shared/types';
import { ToEntity } from '@project/libs/shared/helpers';
import { IEntity } from './entity.interface';
import { IRepository } from './repository.interface';

export abstract class MongoRepository<T extends IEntity> implements IRepository<T> {
  protected readonly model: Model<T>;

  constructor(
    protected readonly EntityClass: ClassConstructor<T>,
  ) {}

  @ToEntity()
  public async find(): Promise<T[]> {
    return this.model.find().exec();
  }

  public async findAll(): Promise<IPagination<T>> {
    const items = await this.find();
    return { count: items.length, items };
  }

  @ToEntity()
  public async findOne(id: T['id']): Promise<T> {
    return this.model.findOne({ _id: id });
  }

  @ToEntity()
  public async create(data: Partial<T>): Promise<T> {
    return new this.model(data).save();
  }

  @ToEntity()
  public async update(id: T['id'], data: Partial<T>): Promise<T> {
    const options = { new: true, runValidators: true };
    return this.model.findByIdAndUpdate(id, data, options).exec();
  }

  @ToEntity()
  public async remove(id: T['id']): Promise<T> {
    const entity = await this.findOne(id);
    if (entity) {
      await this.model.deleteOne({ _id: id });
    }
    return entity;
  }

  public async removeAll(): Promise<number> {
    const { deletedCount } = await this.model.deleteMany();
    return deletedCount;
  }
}
