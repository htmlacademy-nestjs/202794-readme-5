import { Injectable, ParseUUIDPipe } from '@nestjs/common';

@Injectable()
export class UUIDValidationPipe extends ParseUUIDPipe {
  constructor() {
    super({ optional: true });
  }
}
