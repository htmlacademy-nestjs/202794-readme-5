import { Injectable, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthErrorMessage } from '../auth.const';

@Injectable()
export class NotAuthGuard extends JwtAuthGuard {
  public override async canActivate(context: ExecutionContext) {
    try {
      await super.canActivate(context);
    } catch { /** Just ignore */}
    const request = context.switchToHttp().getRequest();

    if (request.user) {
      throw new ForbiddenException(AuthErrorMessage.ForUnAuthUsers);
    }
    return true;
  }
}
