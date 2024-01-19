import { Injectable, ParseIntPipe } from '@nestjs/common';

@Injectable()
export class OffsetValidationPipe extends ParseIntPipe {
  constructor() {
    super({ optional: true });
  }
}
