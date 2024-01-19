import { ArgumentMetadata, Injectable, ParseArrayPipe } from '@nestjs/common';
import { TAG_MESSAGE, TAG_REGEXP } from '../validators/is-post-tag';

@Injectable()
export class PostTagsValidationPipe extends ParseArrayPipe {
  constructor() {
    super({ items: String, separator: ',', optional: true });
  }

  override async transform(value: string = null, metadata: ArgumentMetadata) {
    return super.transform(value, metadata);
  }

  override validatePrimitive(originalValue: unknown, index: number) {
    const value = super.validatePrimitive(originalValue, index);

    if (!`${value}`.match(TAG_REGEXP)) {
      throw this.exceptionFactory(`${`At ${index} index: `}${TAG_MESSAGE}`);
    }
    return value;
  }
}
