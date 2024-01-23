import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { AuthUserRdo } from './auth.rdo/auth-user.rdo';
import { AuthErrorMessage } from './auth.const';

export const AuthUserNotFound =
  new NotFoundInterceptor(AuthErrorMessage.AuthUserNotFound);

export const AuthUserTransform =
  new TransformInterceptor(AuthUserRdo);
