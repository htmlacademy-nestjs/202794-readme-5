import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { UserRdo } from './users.rdo/user.rdo';
import { UsersErrorMessage } from './users.const';
import { UsersRdo } from './users.rdo/users.rdo';

export const UserNotFound =
  new NotFoundInterceptor(UsersErrorMessage.UserNotFound);

export const UserTransform =
  new TransformInterceptor(UserRdo);

export const UsersTransform =
  new TransformInterceptor(UsersRdo);
