import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { PostRdo } from './posts.rdo/post.rdo';
import { PostsErrorMessage } from './posts.const';
import { PostsGroups } from './posts.filters';

export const PostNotFoundInterceptor =
  new NotFoundInterceptor(PostsErrorMessage.PostNotFound);

export const PostTransformInterceptor =
  new TransformInterceptor(PostRdo);

export const DetailedPostTransformInterceptor =
  new TransformInterceptor(PostRdo, [PostsGroups.Detailed]);
