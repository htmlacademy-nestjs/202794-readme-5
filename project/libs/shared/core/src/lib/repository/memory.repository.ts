import { randomUUID } from 'node:crypto';
import { IPagination } from '@project/libs/shared/types';
import { IEntity } from './entity.interface';
import { IRepository } from './repository.interface';

export abstract class MemoryRepository<T extends IEntity> implements IRepository<T> {
  protected readonly entities: Map<T['id'], T> = new Map();

  public async findAll(): Promise<IPagination<T>> {
    const items = Array.from(this.entities.values());
    const count = items.length;
    return { count, items };
  }

  public async findOne(id: T['id']): Promise<T> {
    return this.entities.get(id) || null;
  }

  public async create(data: T): Promise<T> {
    data.id = data.id || randomUUID();
    this.entities.set(data.id, data);
    return data;
  }

  public async update(id: T['id'], data: Partial<T>): Promise<T> {
    const entity = await this.findOne(id);
    if (!entity)  return null;
    return this.entities.set(id, Object.assign(entity, data, { id })).get(id);
  }

  public async remove(id: T['id']): Promise<T> {
    const entity = await this.findOne(id);
    if (entity) this.entities.delete(id);
    return entity;
  }
}
