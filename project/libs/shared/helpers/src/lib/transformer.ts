import { plainToInstance, ClassConstructor } from 'class-transformer';

export function transform<T, V extends Partial<T>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
): T;

export function transform<T, V extends Partial<T>[]>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
): T[];

export function transform<T, V extends Partial<T>>(
  DtoClass: ClassConstructor<T>,
  plainObject: V,
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
      excludeExtraneousValues: true,
  });
}
