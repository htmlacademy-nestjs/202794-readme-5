import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { TagRdo } from './tags.rdo/tags.rdo';
import { TagsErrorMessage } from './tags.const';

export const TagNotFound =
  new NotFoundInterceptor(TagsErrorMessage.TagNotFound);

export const TagTransform =
  new TransformInterceptor(TagRdo);

export const TagsTransform =
  new TransformPaginationInterceptor(TagRdo);
