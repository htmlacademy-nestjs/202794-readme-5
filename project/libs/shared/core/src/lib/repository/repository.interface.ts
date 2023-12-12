import type { IEntity } from './entity.interface';

export interface IRepository<E extends IEntity> {
  findAll(): Promise<E[]>;
  findOne(id: E['id']): Promise<E | null>;
  create(data: E): Promise<E>;
  update(id: E['id'], data: E): Promise<E>;
  remove(id: E['id']): Promise<E>;
}
