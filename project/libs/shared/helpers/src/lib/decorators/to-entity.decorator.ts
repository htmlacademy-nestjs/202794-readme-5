import { transform } from '../transformer';

export function ToEntity() {
  return function (
    _target: unknown,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: unknown[]) {
      const result: unknown = originalMethod.apply(this, args);
      const EntityClass = this.EntityClass;
      return EntityClass ? transform(EntityClass, result) : result;
    }
  };
}
