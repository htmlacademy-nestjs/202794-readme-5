import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { AuthorRdo } from './authors.rdo/author.rdo';
import { AuthorsErrorMessage } from './authors.const';
import { AuthorsRdo } from './authors.rdo/authors.rdo';

export const AuthorNotFound =
  new NotFoundInterceptor(AuthorsErrorMessage.AuthorNotFound);

export const AuthorTransform =
  new TransformInterceptor(AuthorRdo);

export const AuthorsTransform =
  new TransformInterceptor(AuthorsRdo);
