import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { PostRdo, PostDetailedRdo } from './posts.rdo/post.rdo';
import { PostsErrorMessage } from './posts.const';
import { PostsRdo } from './posts.rdo/posts.rdo';

export const PostNotFound =
  new NotFoundInterceptor(PostsErrorMessage.PostNotFound);

export const PostTransform =
  new TransformInterceptor(PostRdo);

export const PostsTransform =
  new TransformInterceptor(PostsRdo);

export const DetailedPostTransform =
  new TransformInterceptor(PostDetailedRdo);
