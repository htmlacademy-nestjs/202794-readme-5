import { MulterFile } from '@project/libs/shared/types';

export const PHOTO_FILE_MAX_SIZE = 1 * 1024 * 1024; // 1 Mb
export const PHOTO_FILE_TYPE = /^image\/(jpg|jpeg|png)$/i;

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PhotoFileValidationPipe implements PipeTransform {
  transform(value: MulterFile | null) {
    if (typeof value === 'undefined') {
      return value;
    }
    if (!value?.mimetype.match(PHOTO_FILE_TYPE)) {
      throw new BadRequestException(`Photo validation failed (expected type is ${PHOTO_FILE_TYPE})`);
    }
    if (value?.size > PHOTO_FILE_MAX_SIZE) {
      throw new BadRequestException(`Photot validation failed (expected size is less than ${PHOTO_FILE_MAX_SIZE})`);
    }
    return value;
  }
}
