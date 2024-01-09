import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { AuthorRdo } from './authors.rdo/author.rdo';
import { AuthorErrorMessage, AuthorsGroups } from './authors.const';

export const AuthorNotFoundInterceptor =
  new NotFoundInterceptor(AuthorErrorMessage.AuthorNotFound);

export const AuthorTransformInterceptor =
  new TransformInterceptor(AuthorRdo, [AuthorsGroups.Detailed]);
