import { NotFoundInterceptor, TransformInterceptor } from '@project/libs/shared/helpers';
import { FileRdo } from './files.rdo/file.rdo';
import { FilesErrorMessage } from './files.const';
import { FilesRdo } from './files.rdo/files.rdo';

export const FileNotFound =
  new NotFoundInterceptor(FilesErrorMessage.FileNotFound);

export const FileTransform =
  new TransformInterceptor(FileRdo);

export const FilesTransform =
  new TransformInterceptor(FilesRdo);
