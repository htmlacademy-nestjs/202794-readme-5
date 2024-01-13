import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { CommentRdo } from './comments.rdo/comment.rdo';
import { CommentsErrorMessage } from './comments.const';

export const CommentNotFoundInterceptor =
  new NotFoundInterceptor(CommentsErrorMessage.CommentNotFound);

export const CommentTransformInterceptor =
  new TransformInterceptor(CommentRdo);
