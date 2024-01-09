import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotFoundInterceptor<T> implements NestInterceptor<T> {
  public constructor(private message: string) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return  next.handle()
    .pipe(catchError(error => throwError(() => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return new NotFoundException(this.message)
        }
      }
      return error;
    })))
    .pipe(tap(data => { if (data == null) throw new NotFoundException(this.message) }))
  }
}
