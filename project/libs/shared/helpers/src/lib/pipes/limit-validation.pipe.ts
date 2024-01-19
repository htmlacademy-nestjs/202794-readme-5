import { Injectable, ParseIntPipe } from '@nestjs/common';

@Injectable()
export class LimitValidationPipe extends ParseIntPipe {
  constructor() {
    super({ optional: true });
  }
}
