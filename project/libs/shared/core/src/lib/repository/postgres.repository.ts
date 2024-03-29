/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClientService } from '@project/libs/shared/prisma';
import { ClassConstructor, IPagination } from '@project/libs/shared/types';
import { IEntity, EntityId } from './entity.interface';
import { IRepository } from './repository.interface';

export abstract class PostgresRepository<
  TEntity extends IEntity<TEntityId>,
  TEntityId extends EntityId = EntityId
> implements IRepository<TEntity> {
  constructor(
    protected readonly client: PrismaClientService,
    protected readonly EntityClass: ClassConstructor<TEntity>,
  ) {}

  public async findAll(): Promise<IPagination<TEntity>> {
    throw new Error('Method not implemented.');
  }

  public async findOne(id: TEntityId): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }

  public async create(data: TEntity): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }

  public async update(id: TEntityId, data: TEntity): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }

  public async remove(id: TEntityId): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }
}
