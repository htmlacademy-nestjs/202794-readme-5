import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { CommentRdo } from './comments.rdo/comment.rdo';
import { CommentsErrorMessage } from './comments.const';

export const CommentNotFound =
  new NotFoundInterceptor(CommentsErrorMessage.CommentNotFound);

export const CommentTransform =
  new TransformInterceptor(CommentRdo);

export const CommentsTransform =
  new TransformPaginationInterceptor(CommentRdo);
