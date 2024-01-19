import { isString } from 'class-validator';
import { ArgumentMetadata, Injectable, ParseEnumPipe } from '@nestjs/common';
import { PostsOrder } from '@project/libs/shared/types';

@Injectable()
export class PostsOrderValidationPipe extends ParseEnumPipe {
  constructor() {
    super(PostsOrder, { optional: true });
  }

  override async transform(value: string = null, metadata: ArgumentMetadata) {
    return super.transform(isString(value) ? value.toUpperCase() : value, metadata);
  }
}
