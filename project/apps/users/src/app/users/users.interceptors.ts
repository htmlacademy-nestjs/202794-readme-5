import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { UserRdo } from './users.rdo/user.rdo';
import { UsersErrorMessage } from './users.const';

export const UserNotFound =
  new NotFoundInterceptor(UsersErrorMessage.UserNotFound);

export const UserTransform =
  new TransformInterceptor(UserRdo);

export const UsersTransform =
  new TransformPaginationInterceptor(UserRdo);
