import { isString } from 'class-validator';
import { PostType } from '@project/libs/shared/types';
import { ArgumentMetadata, Injectable, ParseEnumPipe } from '@nestjs/common';

@Injectable()
export class PostTypeValidationPipe extends ParseEnumPipe {
  constructor() {
    super(PostType, { optional: true });
  }

  override async transform(value: string = null, metadata: ArgumentMetadata) {
    return super.transform(isString(value) ? value.toUpperCase() : value, metadata);
  }
}
