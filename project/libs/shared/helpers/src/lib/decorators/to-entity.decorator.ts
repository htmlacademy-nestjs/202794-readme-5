import { transform } from '@project/libs/shared/helpers';

export function ToEntity() {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const result: unknown = originalMethod.apply(this, args);
      const EntityClass = this.EntityClass;
      return EntityClass ? transform(EntityClass, result) : result;
    }
  };
}
