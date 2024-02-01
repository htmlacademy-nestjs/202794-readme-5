import { HttpModule } from '@nestjs/axios';

export const HTTP_API_TIMEOUT = 5000;
export const HTTP_API_MAX_REDIRECTS = 5;

export const HttpApiModule = HttpModule.register({
  timeout: HTTP_API_TIMEOUT,
  maxRedirects: HTTP_API_MAX_REDIRECTS,
});
