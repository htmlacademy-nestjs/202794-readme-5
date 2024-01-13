import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { TagRdo } from './tags.rdo/tags.rdo';
import { TagsErrorMessage } from './tags.const';

export const TagNotFoundInterceptor =
  new NotFoundInterceptor(TagsErrorMessage.TagNotFound);

export const TagTransformInterceptor =
  new TransformInterceptor(TagRdo);
