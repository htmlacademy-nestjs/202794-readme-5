import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { CommentRdo } from './comments.rdo/comment.rdo';
import { CommentsErrorMessage } from './comments.const';
import { CommentsRdo } from './comments.rdo/comments.rdo';

export const CommentNotFound =
  new NotFoundInterceptor(CommentsErrorMessage.CommentNotFound);

export const CommentTransform =
  new TransformInterceptor(CommentRdo);

export const CommentsTransform =
  new TransformInterceptor(CommentsRdo);
