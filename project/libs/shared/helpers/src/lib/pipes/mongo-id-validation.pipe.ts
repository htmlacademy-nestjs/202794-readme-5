import { isMongoId } from 'class-validator';
import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class MongoIdValidationPipe implements PipeTransform {
  transform(value: string, { type, data }: ArgumentMetadata) {
    if (type !== 'param' && type !== 'query') {
      throw new Error('MongoIdValidationPipe must used only with params of queries');
    }
    if (type === 'query' && typeof value === 'undefined') {
      return value;
    }
    if (!isMongoId(value)) {
      throw new BadRequestException(`Invalid mongo object id type of ${data}`);
    }
    return value;
  }
}
