import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassConstructor } from 'class-transformer';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { transform } from '../transformer';

@Injectable()
export class TransformInterceptor<T, V extends Partial<T>> implements NestInterceptor<V, T | T[]> {
  public constructor(
    private DtoClass: ClassConstructor<T>,
    private groups?: string[],
  ) {}

  public intercept(context: ExecutionContext, next: CallHandler<V>): Observable<T | T[]> {
    return next.handle().pipe(
      map(data => transform(this.DtoClass, data, this.groups)),
    );
  }
}
