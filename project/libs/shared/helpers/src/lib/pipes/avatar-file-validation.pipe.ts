import { MulterFile } from '@project/libs/shared/types';

export const AVATAR_FILE_MAX_SIZE = 500 * 1024; // 500 Kb
export const AVATAR_FILE_TYPE = /^image\/(jpg|jpeg|png)$/i;

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class AvatarFileValidationPipe implements PipeTransform {
  transform(value: MulterFile | null) {
    if (typeof value === 'undefined') {
      return value;
    }
    if (!value?.mimetype.match(AVATAR_FILE_TYPE)) {
      throw new BadRequestException(`Avatar validation failed (expected type is ${AVATAR_FILE_TYPE})`);
    }
    if (value?.size > AVATAR_FILE_MAX_SIZE) {
      throw new BadRequestException(`Avatar validation failed (expected size is less than ${AVATAR_FILE_MAX_SIZE})`);
    }
    return value;
  }
}
