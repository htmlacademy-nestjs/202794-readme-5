import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { TagRdo } from './tags.rdo/tag.rdo';
import { TagsErrorMessage } from './tags.const';
import { TagsRdo } from './tags.rdo/tags.rdo';

export const TagNotFound =
  new NotFoundInterceptor(TagsErrorMessage.TagNotFound);

export const TagTransform =
  new TransformInterceptor(TagRdo);

export const TagsTransform =
  new TransformInterceptor(TagsRdo);
