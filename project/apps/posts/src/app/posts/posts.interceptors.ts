import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { PostRdo } from './posts.rdo/post.rdo';
import { PostsErrorMessage } from './posts.const';
import { PostsGroups } from './posts.filters';

export const PostNotFound =
  new NotFoundInterceptor(PostsErrorMessage.PostNotFound);

export const PostTransform =
  new TransformInterceptor(PostRdo);

export const PostsTransform =
  new TransformPaginationInterceptor(PostRdo);

export const DetailedPostTransform =
  new TransformInterceptor(PostRdo, { groups: [PostsGroups.Detailed] });
