import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassConstructor } from 'class-transformer';
import { IPagination } from '@project/libs/shared/types';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

import { transform } from '../transformer';

export type TransformPaginationOptions = {
  /** Отображаемая группа полей объекта */
  groups?: string[];
}

@Injectable()
export class TransformPaginationInterceptor<T, V extends IPagination<Partial<T>>> implements NestInterceptor<V, IPagination<Partial<T>>> {
  public constructor(
    private DtoClass: ClassConstructor<T>,
    private options?: TransformPaginationOptions,
  ) {}

  public intercept(context: ExecutionContext, next: CallHandler<V>): Observable<IPagination<Partial<T>>> {
    return next.handle().pipe(
      map(data => {
        data.items = transform(this.DtoClass, data.items, this.options?.groups);
        return data;
      }),
    );
  }
}
