import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { LikeRdo } from './likes.rdo/like.rdo';
import { LikesRdo } from './likes.rdo/likes.rdo';
import { LikesErrorMessage } from './likes.const';

export const LikeNotFound =
  new NotFoundInterceptor(LikesErrorMessage.LikeNotFound);

export const LikeTransform =
  new TransformInterceptor(LikeRdo);

export const LikesTransform =
  new TransformInterceptor(LikesRdo);
