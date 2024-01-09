import { Types } from 'mongoose';
import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class MongoIdValidationPipe implements PipeTransform {
  transform(value: string, { type }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('MongoIdValidationPipe must used only with params.');
    }
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException('Invalid mongo object id type');
    }
    return value;
  }
}
