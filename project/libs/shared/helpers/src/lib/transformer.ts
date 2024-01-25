import { plainToInstance, ClassConstructor } from 'class-transformer';

export function transform<T, V extends Partial<T>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
  groups?: string[],
): T;

export function transform<T, V extends Promise<Partial<T>>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
  groups?: string[],
): Promise<T>;

export function transform<T, V extends Partial<T>[]>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
  groups?: string[],
): T[];

export function transform<T, V extends Promise<Partial<T>[]>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
  groups?: string[],
): Promise<T[]>;

export function transform<T, V extends Partial<T>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V | Promise<V>,
  groups?: string[],
): T | T[] | Promise<T> | Promise<T[]> {
  return plainToInstance(DtoClass, plainObject, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
      groups: groups,
  });
}
