import { HttpModule } from '@nestjs/axios';

export const HttpApiModule = HttpModule.register({
  timeout: 5000,
  maxRedirects: 5,
});
