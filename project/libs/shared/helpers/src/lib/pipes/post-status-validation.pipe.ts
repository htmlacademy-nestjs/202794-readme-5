import { isString } from 'class-validator';
import { ArgumentMetadata, Injectable, ParseEnumPipe } from '@nestjs/common';
import { PostStatus } from '@project/libs/shared/types';

@Injectable()
export class PostStatusValidationPipe extends ParseEnumPipe {
  constructor() {
    super(PostStatus, { optional: true });
  }

  override async transform(value: string = null, metadata: ArgumentMetadata) {
    return super.transform(isString(value) ? value.toUpperCase() : value, metadata);
  }
}
