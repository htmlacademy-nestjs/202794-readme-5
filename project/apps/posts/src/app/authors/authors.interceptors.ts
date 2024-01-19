import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { AuthorRdo } from './authors.rdo/author.rdo';
import { AuthorsErrorMessage, AuthorsGroups } from './authors.const';

export const AuthorNotFoundInterceptor =
  new NotFoundInterceptor(AuthorsErrorMessage.AuthorNotFound);

export const AuthorTransformInterceptor =
  new TransformInterceptor(AuthorRdo, { groups: [AuthorsGroups.Detailed] });

export const AuthorsTransformInterceptor =
  new TransformPaginationInterceptor(AuthorRdo, { groups: [AuthorsGroups.Detailed] });
