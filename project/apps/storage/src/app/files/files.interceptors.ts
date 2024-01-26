import { NotFoundInterceptor, TransformInterceptor, TransformPaginationInterceptor } from '@project/libs/shared/helpers';
import { FileRdo } from './files.rdo/file.rdo';
import { FilesErrorMessage } from './files.const';

export const FileNotFound =
  new NotFoundInterceptor(FilesErrorMessage.FileNotFound);

export const FileTransform =
  new TransformInterceptor(FileRdo);

export const FilesTransform =
  new TransformPaginationInterceptor(FileRdo);
