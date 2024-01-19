import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { LikeRdo } from './likes.rdo/likes.rdo';
import { LikesErrorMessage } from './likes.const';

export const LikeNotFoundInterceptor =
  new NotFoundInterceptor(LikesErrorMessage.LikeNotFound);

export const LikeTransformInterceptor =
  new TransformInterceptor(LikeRdo);

export const LikesTransformInterceptor =
  new TransformPaginationInterceptor(LikeRdo);
