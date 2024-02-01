import { randomUUID } from 'node:crypto';
import { CallHandler, ExecutionContext, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class RequestIdInterceptor<T = unknown> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T> {
    const requestId = randomUUID();
    const request = context.switchToHttp().getRequest<Request>();
    const { method, url } = request;

    request.headers['X-Request-Id'] = requestId;

    Logger.log(`[${method}: ${url}]: RequestID is ${requestId}`)

    return next.handle();
  }
}
